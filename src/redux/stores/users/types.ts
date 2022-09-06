export interface IResult {
  results: IUser[];
}

export interface IUser {
  gender: string;
  name: IName;
  email: string;
  phone: string;
}

interface IName {
  title: string;
  first: string;
  last: string;
}
