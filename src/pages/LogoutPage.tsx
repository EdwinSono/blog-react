/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
import { useAuth } from '../auth';

function LogoutPage() {
  const auth: any = useAuth();

  const logout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.logout();
  };
  
  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Segura de que quieras salir?</label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { LogoutPage };
