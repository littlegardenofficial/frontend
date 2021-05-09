import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {
  FETCH_USER_CART_DATA_ACTION,
  REQUEST_ADD_ITEM_TO_CART_ACTION,
} from '../redux/actions/constants';

import AppConfig from '../config/AppConfig';
import {
  fetchUserCartSucceedAction,
  requestAddItemToCartSucceedAction,
} from '../redux/actions/cartAction';
import {fetchCartData, addItemToCart} from '../mockServices/cartMockService';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUserCartData(action) {
  try {
    const cartData = yield call(
      AppConfig.STAND_ALONE ? fetchCartData : null,
      action.payload,
    );
    yield put(fetchUserCartSucceedAction(cartData));
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* addItemToUserCart(action) {
  try {
    console.log(action.payload);
    const response = yield call(
      AppConfig.STAND_ALONE ? addItemToCart : null,
      action.payload,
    );
    console.log(response);
    yield put(
      requestAddItemToCartSucceedAction({
        ...response,
        userId: action.payload.userId,
      }),
    );
  } catch (e) {}
}

function* fetchCartDataSaga() {
  yield takeLatest(FETCH_USER_CART_DATA_ACTION, fetchUserCartData);
}

function* addItemToCartSaga() {
  yield takeLatest(REQUEST_ADD_ITEM_TO_CART_ACTION, addItemToUserCart);
}

function* cartSaga() {
  yield fork(fetchCartDataSaga);
  yield fork(addItemToCartSaga);
}

export default cartSaga;
