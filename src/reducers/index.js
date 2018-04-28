import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
  routing: routerReducer
});

export default rootReducer;
