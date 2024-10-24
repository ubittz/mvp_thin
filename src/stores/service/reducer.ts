import { createSlice } from '@reduxjs/toolkit';

import { ServiceState } from '@@stores/service/type';

const initialState: ServiceState = {
  serviceHistoryList: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
});

export const {} = serviceSlice.actions;

export default serviceSlice.reducer;
