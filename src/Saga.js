import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const getUserName = async () => {
  return 'Xyz';
};

function* fetchUser() {
  try {
    const userName = yield call(getUserName);
    yield put({type: 'UPDATE_NAME_SUCCESS', payload: userName});
  } catch (e) {
    console.log(e);
  }
}

function* removeTodo() {
  try {
    yield delay(2000);
    yield put({type: 'REMOVE_ALL_TODO'});
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest('UPDATE_NAME', fetchUser);
  yield takeLatest('REMOVE_TODO', removeTodo);
}

export default mySaga;
