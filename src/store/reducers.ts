import { combineReducers } from 'redux';

import certificate from '@@stores/certificate/reducer';
import home from '@@stores/home/reducer';
import message from '@@stores/message/reducer';
import service from '@@stores/service/reducer';

export const rootReducers = combineReducers({
  home,
  message,
  service,
  certificate,
});
