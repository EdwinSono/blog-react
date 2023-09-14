/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {IUser} from '../data/users'

interface IAuthProvider {
  children : any
}

interface IAuthContext {
  user: IUser;
  login: any;
  logout: any;
}

const AuthContext = createContext<IAuthContext | any>(null);

function AuthProvider({ children } : IAuthProvider) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<IUser | null>(null);

  const login = (user: IUser) => {
    setUser(user);
    const path = location.state?.from?.pathname || '/profile';
    return navigate(path, { replace: true });
  };
  
  const logout = () => {
    setUser(null);
    navigate('/');
  };
  
  const update = (data: IUser) => {
    setUser({ ...user, ...data });
  };

  const isLogged = user !== null;

  const auth = { user, login, logout, update, isLogged };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export {
  AuthProvider,
  useAuth,
};
