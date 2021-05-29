import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {LOGIN_REQUEST_ACTION} from '../redux/actions/constants';

import AppConfig from '../config/AppConfig';
import {loginRequest} from '../mockServices/authMockService';
import {loginRequestActionSucceeded} from '../redux/actions/authActions';
import {fetchUserCartAction} from '../redux/actions/cartAction';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';
import {showDangerFlashMessage} from '../utils/FlashMessageUtil';
import {SOMETHING_WENT_WRONG} from '../utils/AppConstants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* requestForLogin(action) {
  try {
    yield put(startLoadingAction());
    const userData = yield call(AppConfig.STAND_ALONE ? loginRequest : null, {
      ...action.payload,
    });
    yield put(loginRequestActionSucceeded(userData));
    yield put(fetchUserCartAction(userData.userId));
    yield put(stopLoadingAction());
  } catch (e) {
    console.error(e);
    yield put(stopLoadingAction());
    showDangerFlashMessage(SOMETHING_WENT_WRONG + ' !');
  }
}

function* authRequestSaga() {
  yield takeLatest(LOGIN_REQUEST_ACTION, requestForLogin);
}

function* authSaga() {
  yield fork(authRequestSaga);
}

export default authSaga;
