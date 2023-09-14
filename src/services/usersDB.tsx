/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { users as usersDB, IUser } from '../data/users';

interface Props {
  children : any
}

const UsersDBContext: any = React.createContext(null);

const UsersDBProvider = ({ children }: Props) => {
  const [users, setUsers] = React.useState(usersDB || []);

  const findUser = (username: string) => {
    return users.find((u) => u.username === username);
  };

  const updateUser = (user: IUser) => {
    const idx = users.findIndex((u) => u.username === user.username);
    if (idx >= 0) {
      const usersTemp = [...users];
      usersTemp[idx] = {
        ...usersTemp[idx],
        ...user,
      };
      setUsers(usersTemp);
    }
  };

  const value = { users, findUser, updateUser };
  return (
    <UsersDBContext.Provider value={value}>{children}</UsersDBContext.Provider>
  );
};

const useUsersDB = () => {
  return React.useContext(UsersDBContext);
};

export { UsersDBProvider, useUsersDB };
