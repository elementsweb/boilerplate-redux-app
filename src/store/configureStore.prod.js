import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(sagaMiddleware, reduxRouterMiddleware)
);

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
