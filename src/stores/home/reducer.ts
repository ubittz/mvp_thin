import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { COMPANY_DATA, HOME_TABS, MEMBER_DATA, WORKER_DATA } from '@@stores/home/constants';
import { HomeState, HomeTabs } from '@@stores/home/type';

const initialState: HomeState = {
  me: MEMBER_DATA[MEMBER_DATA.length - 1],
  workerList: WORKER_DATA,
  companyList: COMPANY_DATA,
  selectedTab: HOME_TABS.FIND_WORKER,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSelectedTab(state, { payload }: PayloadAction<HomeTabs>) {
      state.selectedTab = payload;
    },
  },
});

export const { setSelectedTab } = homeSlice.actions;

export default homeSlice.reducer;
