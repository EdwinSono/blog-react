/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthProvider {
  children : any
}

interface IAuthContext {
  user: {
    username: string
  };
  login: any;
  logout: any;
}

interface IUser {
  username : string;
}

const AuthContext = createContext<IAuthContext | any>(null);

function AuthProvider({ children } : IAuthProvider) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IAuthContext | any>(null);

  const login = ({ username }: IUser) => {
    setUser({ username });
    navigate('/profile');
  };
  
  const logout = () => {
    setUser(null);
    navigate('/');
  };
  
  const auth: IAuthContext = { user, login, logout };

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
