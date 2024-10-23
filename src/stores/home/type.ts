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
  image: string;
  name: string;
  category: string;
  region: string;
  description: string;
}

export interface Company {
  image: string;
  name: string;
  category: string;
  region: string;
  description: string;
}
