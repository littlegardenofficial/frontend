import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import fetchProductList from '../mockServices/productListMockService';
import {REQUEST_FETCH_PRODUCTS} from '../redux/actions/constants';
import {fetchProductsSucceeded} from '../redux/actions/productsAction';
import AppConfig from '../config/AppConfig';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts(action) {
  try {
    const productList = yield call(
      AppConfig.STAND_ALONE ? fetchProductList : null,
    );
    yield put(fetchProductsSucceeded(productList));
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* productSaga() {
  yield takeLatest(REQUEST_FETCH_PRODUCTS, fetchProducts);
}

export default productSaga;
