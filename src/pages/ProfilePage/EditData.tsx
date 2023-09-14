/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IUser } from '../../data/users'

interface Props {
  user: IUser;
  handleSave: any;
}


const EditData = ({ user, handleSave }: Props) => {
  const [phone, setPhone] = React.useState(user?.phonenumber || '');
  const [desc, setDesc] = React.useState(user?.description || '');

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSave({ phonenumber: phone, description: desc });
  };

  const isDisabled = !(phone && desc);

  return (
    <form onSubmit={save}>
      <label>
        Phonenumber:
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <button type="submit" disabled={isDisabled}>
        Save
      </button>
    </form>
  );
};

export { EditData };
