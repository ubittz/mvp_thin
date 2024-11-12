import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { thunk } from 'redux-thunk';

import { actionMiddleware } from '@@store//middlewares/actionMiddleware';
import { rootReducers } from '@@store/reducers';
import { rootSagas } from '@@store/sagas';

const createStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const middlewares = [actionMiddleware, sagaMiddleWare, thunk];

  const store = configureStore({
    reducer: rootReducers,
    // middleware: () => new Tuple(...middlewares, logger),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...middlewares, logger),
  });

  sagaMiddleWare.run(rootSagas);

  return store;
};

export const store = createStore();

export const { dispatch } = store;

export type AppDispatch = typeof store.dispatch;
