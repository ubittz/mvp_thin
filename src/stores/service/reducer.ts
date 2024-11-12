import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '@@stores/home/type';
import { SERVICE_HISTORY_LIST, SERVICE_STATUS } from '@@stores/service/constants';
import { ServiceState } from '@@stores/service/type';

const initialState: ServiceState = {
  serviceHistoryList: SERVICE_HISTORY_LIST,
  requestOfferList: [],
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    requestOffer(state, { payload: { contractorId, contractorType } }: PayloadAction<{ contractorId: number; contractorType: UserType }>) {
      state.requestOfferList.push({
        id: state.requestOfferList[state.requestOfferList.length - 1]?.id ?? 1,
        contractorId,
        contractorType,
        status: SERVICE_STATUS.REQUESTED_OFFER,
        updatedAt: new Date(),
      });
    },
    approveOffer(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      const index = state.serviceHistoryList.findIndex((service) => service.id === id);
      state.serviceHistoryList[index] = {
        ...state.serviceHistoryList[index],
        status: SERVICE_STATUS.PENDING,
        updatedAt: new Date(),
      };
    },
    rejectOffer(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      const index = state.serviceHistoryList.findIndex((service) => service.id === id);
      state.serviceHistoryList[index] = {
        ...state.serviceHistoryList[index],
        status: SERVICE_STATUS.CANCELED_OFFER,
        updatedAt: new Date(),
      };
    },
    approveMatch(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      const index = state.serviceHistoryList.findIndex((service) => service.id === id);
      state.serviceHistoryList[index] = {
        ...state.serviceHistoryList[index],
        status: SERVICE_STATUS.MATCHED,
        updatedAt: new Date(),
      };
    },
    rejectMatch(state, { payload: { id } }: PayloadAction<{ id: number }>) {
      const index = state.serviceHistoryList.findIndex((service) => service.id === id);
      state.serviceHistoryList[index] = {
        ...state.serviceHistoryList[index],
        status: SERVICE_STATUS.REJECTED,
        updatedAt: new Date(),
      };
    },
  },
});

export const { requestOffer, approveOffer, rejectOffer, approveMatch, rejectMatch } = serviceSlice.actions;

export default serviceSlice.reducer;
