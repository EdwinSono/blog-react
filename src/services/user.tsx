/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useAuth } from './auth';
import { ROLE } from '../data/users';
import { useUsersDB } from './usersDB';

function useUser() {
  const { user, update } = useAuth();
  const usersDb: any = useUsersDB();

  React.useEffect(() => {
    if (user) {
      usersDb.updateUser(user);
    }
  }, [user]);

  return {
    data: user,
    update,
    isAdmin: user?.roles?.includes(ROLE.ADMIN) || false,
  };
}

export { useUser };
