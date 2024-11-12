import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@@store';
import { AppState } from '@@store/types';

export const useAppState = <T>(selector: (state: AppState) => T) => {
  return useSelector(selector);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
