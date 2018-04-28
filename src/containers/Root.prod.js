import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from '../components';

const Root = ({ store }) => {
  // sync navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={App} />
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func,
    getState: PropTypes.func,
    liftedStore: PropTypes.object,
    replaceReducer: PropTypes.func,
    subscribe: PropTypes.func,
  }).isRequired,
};

export default Root;
