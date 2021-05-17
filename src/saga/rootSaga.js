import {call, put, takeEvery, takeLatest, all, spawn} from 'redux-saga/effects';
import productSaga from './productsSaga';
import categorySaga from './categorySaga';
import cartSaga from './cartSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield spawn(productSaga);
  yield spawn(categorySaga);
  yield spawn(cartSaga);
  yield spawn(authSaga);
}
