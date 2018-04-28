import { takeLatest } from 'redux-saga/effects';

import { INCREMENT_COUNTER } from '../constants';

/* eslint-disable require-yield,no-console */
export function* incrementCounterSaga(action) {
  console.log('[DEBUG]', `Middleware for action with type "${action.type}"`);
}

export default function* watchIncrementCounter() {
  yield takeLatest(INCREMENT_COUNTER, incrementCounterSaga);
}
