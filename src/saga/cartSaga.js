import {call, put, takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {
  FETCH_USER_CART_DATA_ACTION,
  REQUEST_ADD_ITEM_TO_CART_ACTION,
  REQUEST_PLACE_ORDER_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_ACTION,
} from '../redux/actions/constants';

import AppConfig from '../config/AppConfig';
import {
  clearCartItemsAction,
  fetchUserCartSucceedAction,
  requestAddItemToCartSucceedAction,
  requestRemoveItemFromCartSucceedAction,
} from '../redux/actions/cartAction';
import {
  fetchCartData,
  addItemToCart,
  removeItemFromCart,
  placeOrderRequest,
} from '../mockServices/cartMockService';
import {openOrderPlacedDialogAction} from '../redux/actions/orderPlacedDialogAction';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';

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
    // console.log('payload');
    // console.log(action.payload);
    const response = yield call(
      AppConfig.STAND_ALONE ? addItemToCart : null,
      action.payload,
    );
    // console.log(response);
    yield put(
      requestAddItemToCartSucceedAction({
        ...response,
        ...action.payload,
      }),
    );
  } catch (e) {}
}

function* removeItemFromUerCart(action) {
  try {
    const response = yield call(
      AppConfig.STAND_ALONE ? removeItemFromCart : null,
      action.payload,
    );
    yield put(
      requestRemoveItemFromCartSucceedAction({
        ...action.payload,
      }),
    );
  } catch (e) {}
}

function* requestPlaceOrder(action) {
  try {
    yield put(startLoadingAction());
    const response = yield call(
      AppConfig.STAND_ALONE ? placeOrderRequest : null,
      action.payload,
    );
    yield put(clearCartItemsAction());
    yield put(stopLoadingAction());
    yield put(openOrderPlacedDialogAction());
  } catch (e) {
    yield put(stopLoadingAction());
  }
}

function* fetchCartDataSaga() {
  yield takeLatest(FETCH_USER_CART_DATA_ACTION, fetchUserCartData);
}

function* addItemToCartSaga() {
  yield takeLatest(REQUEST_ADD_ITEM_TO_CART_ACTION, addItemToUserCart);
}

function* removeItemFromCartSaga() {
  yield takeLatest(REQUEST_REMOVE_ITEM_FROM_CART_ACTION, removeItemFromUerCart);
}

function* placeOrderSaga() {
  yield takeLatest(REQUEST_PLACE_ORDER_ACTION, requestPlaceOrder);
}

function* cartSaga() {
  yield fork(fetchCartDataSaga);
  yield fork(addItemToCartSaga);
  yield fork(removeItemFromCartSaga)
  yield fork(placeOrderSaga)
}

export default cartSaga;
