import { HOME_TABS } from '@@stores/home/constants';
import { asType } from '@@types/common';

export interface HomeState {
  me?: Member;
  workerList: Worker[];
  companyList: Company[];
  selectedTab: HomeTabs;
}

export type HomeTabs = asType<typeof HOME_TABS>;

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
}

export interface Company {
  id: number;
  image: string;
  name: string;
  category: string;
  region: string;
  description: string;
}

export interface Profile {
  id: number;
  image: string;
  name: string;
  title: string;
  region: string;
  description: string;
}
