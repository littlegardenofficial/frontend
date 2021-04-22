import {call, put, takeEvery, takeLatest, all, spawn} from 'redux-saga/effects';
import productSaga from './productsSaga';

export default function* rootSaga() {
  yield spawn(productSaga);;
}
