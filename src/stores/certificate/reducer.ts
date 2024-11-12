import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CertificateState, Certificate } from '@@stores/certificate/type';

const initialState: CertificateState = {
  certificateList: [
    {
      id: 1,
      title: '재직증명서',
      email: 'abcd1234@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: '경력증명서',
      email: 'sdfe34@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      title: '인재추천서',
      email: 'qfexa10@gmail.com',
      createdAt: new Date(),
    },
  ],
};

const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {
    createCertificateRequest(state, { payload }: PayloadAction<Omit<Certificate, 'id' | 'createdAt'>>) {
      state.certificateList.push({
        ...payload,
        id: state.certificateList[state.certificateList.length - 1].id + 1,
        createdAt: new Date(),
      });
    },
    updateCertificateRequest(state, { payload }: PayloadAction<Omit<Certificate, 'createdAt'>>) {
      const index = state.certificateList.findIndex((certificate) => certificate.id === payload.id);
      state.certificateList[index] = {
        ...state.certificateList[index],
        ...payload,
        createdAt: new Date(),
      };
    },
  },
});

export const { createCertificateRequest, updateCertificateRequest } = certificateSlice.actions;

export default certificateSlice.reducer;
