export interface HomeState {
  me?: Member;
}

export interface Member {
  name: string;
  phone: string;
  email: string;
  accountNumber: string;
}
