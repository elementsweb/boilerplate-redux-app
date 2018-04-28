import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';

const store = configureStore();

const renderApp = () => {
  // eslint-disable-next-line global-require
  const Root = require('./containers/Root').default;
  render(<Root store={store} />, document.getElementById('root'));
};

renderApp();

module.hot.accept(renderApp);
