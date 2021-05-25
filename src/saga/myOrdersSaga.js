import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {FETCH_MY_ORDERS_ACTION} from '../redux/actions/constants';

import AppConfig from '../config/AppConfig';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';
import {fetchMyOrders} from '../mockServices/ordersMockService';
import {fetchMyOrderSuccededAction} from '../redux/actions/myOrders';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* requestForFetchingMyOrders(action) {
  try {
    yield put(startLoadingAction());
    const myOrdersData = yield call(
      AppConfig.STAND_ALONE ? fetchMyOrders : null,
      action.payload,
    );
    yield put(fetchMyOrderSuccededAction(myOrdersData));
    yield put(stopLoadingAction());
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* myOrderRequestSaga() {
  yield takeLatest(FETCH_MY_ORDERS_ACTION, requestForFetchingMyOrders);
}

function* myOrdersSaga() {
  yield fork(myOrderRequestSaga);
}

export default myOrdersSaga;
