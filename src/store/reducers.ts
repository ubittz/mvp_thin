import { combineReducers } from 'redux';

import home from '@@stores/home/reducer';
import message from '@@stores/message/reducer';

export const rootReducers = combineReducers({
  home,
  message,
});
