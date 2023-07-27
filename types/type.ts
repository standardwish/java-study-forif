export interface UsersType {
  users: {
    _id: string;
    username: string;
    password?: string;
    major: string;
    assignment: string;
  }[];
}

export interface UserType {
  user: {
    _id: string;
    username: string;
    password?: string;
    major: string;
    assignment: string;
  };
}

export interface IUser {
  _id?: string;
  username: string;
  password: string;
  major: string;
  assignment: string;
}

export interface IDeleteUser {
  uid: string;
  adminPassword: string;
}

export interface LoginUserParams {
  username: string;
  password: string;
}

export interface IconMode {
  darkMode: boolean;
}

export interface ArrowProp {
  classname: string;
}
