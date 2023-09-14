export enum ROLE {
  ADMIN = 'admin',
  EDITOR = 'editor',
  TEACHER = 'teacher',
  STUDIEN = 'studien',
}

interface IUser { 
  username: string;
  role: ROLE;
  roles: Array<ROLE>;
  phonenumber: string;
  description: string;
}

export const users: IUser[] = [
  {
    username: 'nicobytes',
    phonenumber: '333',
    description: 'I\'m nicobytes (0,0)/',
    role: ROLE.ADMIN,
    roles: [ROLE.ADMIN]
  },
  {
    username: 'diannerd',
    phonenumber: '222',
    description: 'I\'m diannerd (0,0)/',
    role: ROLE.ADMIN,
    roles: [ROLE.ADMIN]
  },
  {
    username: 'freddier',
    phonenumber: '444',
    description: 'I\'m freddier (0,0)/',
    role: ROLE.EDITOR,
    roles: [ROLE.EDITOR]
  },
  {
    username: 'alex',
    phonenumber: '555',
    description: 'I\'m alex (0,0)/',
    role: ROLE.ADMIN,
    roles: [ROLE.ADMIN]
  },
  {
    username: 'juandc',
    phonenumber: '666',
    description: 'I\'m juandc (0,0)/',
    role: ROLE.TEACHER,
    roles: [ROLE.TEACHER]
  },
  {
    username: 'nameless',
    phonenumber: '777',
    description: 'I\'m nameless (0,0)/',
    role: ROLE.STUDIEN,
    roles: [ROLE.STUDIEN]
  },
];

export type { IUser };
