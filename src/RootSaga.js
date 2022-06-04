import {call, all} from 'redux-saga/effects';
import mySaga from './Saga';

function* RootSaga() {
  yield all([call(mySaga)]);
}

export default RootSaga;
