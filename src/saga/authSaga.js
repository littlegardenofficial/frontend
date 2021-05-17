import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {LOGIN_REQUEST_ACTION} from '../redux/actions/constants';

import AppConfig from '../config/AppConfig';
import {loginRequest} from '../mockServices/authMockService';
import {loginRequestActionSucceeded} from '../redux/actions/authActions';
import {fetchUserCartAction} from '../redux/actions/cartAction';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* requestForLogin(action) {
  try {
    const userData = yield call(AppConfig.STAND_ALONE ? loginRequest : null, {
      ...action.payload,
    });
    console.log(userData);
    yield put(loginRequestActionSucceeded(userData));
    yield put(fetchUserCartAction(userData.userId));
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* authRequestSaga() {
  yield takeLatest(LOGIN_REQUEST_ACTION, requestForLogin);
}

function* authSaga() {
  yield fork(authRequestSaga);
}

export default authSaga;
