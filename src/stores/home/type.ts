import { HOME_TABS, USER_TYPE } from '@@stores/home/constants';
import { asType } from '@@types/common';

export interface HomeState {
  me?: Worker;
  workerList: Worker[];
  companyList: Company[];
  selectedTab: HomeTabs;
}

export type HomeTabs = asType<typeof HOME_TABS>;

export type UserType = asType<typeof USER_TYPE>;

export interface Member {
  name: string;
  phone: string;
  email: string;
  accountNumber: string;
}

export interface Worker {
  id: number;
  image: string;
  name: string;
  category: string;
  region: string;
  description: string;
  salary: number; // 만원 단위
  period: string;
}

export interface Company {
  id: number;
  image: string;
  name: string;
  category: string;
  region: string;
  description: string;
  salary: number; // 만원 단위
  period: string;
  desiredDay: string;
}

export interface Profile {
  id: number;
  image: string;
  name: string;
  category: string;
  region: string;
  description: string;
}
