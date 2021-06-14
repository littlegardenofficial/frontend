import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects';
import { LOGIN_REQUEST_ACTION, REQUEST_USER_PROFILE_UPDATE_ACTION } from '../redux/actions/constants';
import { loginRequestActionSucceeded, requestUserDataUpdateSucceededAction } from '../redux/actions/authActions';
import {fetchUserCartAction} from '../redux/actions/cartAction';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';
import ServiceFactory from '../config/ServiceFactory';
import {parseLoginRequest} from '../utils/DataParserUtils/authDataParserUtil';
import {genericExceptionHandling} from '../utils/HelperUtil';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* requestForLogin(action) {
  try {
    yield put(startLoadingAction());
    const userDataResponse = yield call(ServiceFactory.sendLoginRequest , {
      ...action.payload,
    });
    const parsedUserData = parseLoginRequest(userDataResponse.data);
    yield put(loginRequestActionSucceeded(parsedUserData));
    yield put(fetchUserCartAction(parsedUserData.userId));
    yield put(stopLoadingAction());
  } catch (e) {
    yield put(stopLoadingAction());
    genericExceptionHandling(e);
  }
}

function* requestForUserProfileUpdate(action) {
  try {
    yield put(startLoadingAction());
    const userDataResponse = yield call(ServiceFactory.sendUserProfileDataUpdateRequest, {
      ...action.payload,
    });
    const parsedUserData = parseLoginRequest(userDataResponse.data);
    console.log(parsedUserData);
    yield put(requestUserDataUpdateSucceededAction(parsedUserData));
    yield put(stopLoadingAction());
  } catch (e) {
    yield put(stopLoadingAction());
    genericExceptionHandling(e);
  }
}

function* authRequestSaga() {
  yield takeLatest(LOGIN_REQUEST_ACTION, requestForLogin);
}

function* updateUserProfileDataSaga() {
  yield takeLatest(REQUEST_USER_PROFILE_UPDATE_ACTION, requestForUserProfileUpdate);
}

function* authSaga() {
  yield fork(authRequestSaga);
  yield fork(updateUserProfileDataSaga)
}

export default authSaga;
