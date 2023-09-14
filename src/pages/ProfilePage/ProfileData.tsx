// import React from 'react';
import { IUser } from '../../data/users'

interface Props {
  user: IUser
}

const ProfileData = ({ user }: Props) => {
  console.log(`User ${JSON.stringify(user)}`)
  return (
    <ul>
      <li>
        <b>Phonenumber:</b> {user?.phonenumber || '-'}
      </li>
      <li>
        <b>Description:</b> {user?.description || '-'}
      </li>
      <li>
        <b>Roles:</b> {user?.roles || '-'}
      </li>
    </ul>
  );
};

export { ProfileData };