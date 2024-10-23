import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HOME_TABS, WORKER_DATA } from '@@stores/home/constants';
import { HomeState, HomeTabs } from '@@stores/home/type';

const initialState: HomeState = {
  workerList: WORKER_DATA,
  companyList: [],
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
