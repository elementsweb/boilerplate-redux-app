import { all, fork } from 'redux-saga/effects';

import counterSaga from './counter';

export default function* root() {
  yield all([
    fork(counterSaga)
  ]);
}
