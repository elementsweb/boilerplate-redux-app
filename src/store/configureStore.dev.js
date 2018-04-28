import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import DevTools from '../containers/DevTools';

const sagaMiddleware = createSagaMiddleware();

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(sagaMiddleware, reduxRouterMiddleware),
  DevTools.instrument({ maxAge: 30 })
);

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  return store;
};

export default configureStore;
