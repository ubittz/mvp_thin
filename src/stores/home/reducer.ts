import { createSlice } from '@reduxjs/toolkit';

import { WORKER_DATA } from '@@stores/home/constants';
import { HomeState } from '@@stores/home/type';

const initialState: HomeState = {
  workerList: WORKER_DATA,
  companyList: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
