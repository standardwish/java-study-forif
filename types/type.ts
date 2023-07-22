export interface UsersType {
  users: {
    _id: String;
    username: String;
    password?: String;
    major: String;
    assignment: String;
  }[];
}

export interface UserType {
  user: {
    _id: String;
    username: String;
    password?: String;
    major: String;
    assignment: String;
  };
}
