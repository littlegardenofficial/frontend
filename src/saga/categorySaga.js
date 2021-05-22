import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {FETCH_CATEGORY_LIST} from '../redux/actions/constants';
import fetchCategoryList from '../mockServices/categoryListMockService';

import AppConfig from '../config/AppConfig';
import {fetchCategoryListSucceed} from '../redux/actions/categoryAction';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCategoryListGenerator(action) {
  try {
    yield put(startLoadingAction());
    const categoryList = yield call(
      AppConfig.STAND_ALONE ? fetchCategoryList : null,
    );
    yield put(fetchCategoryListSucceed(categoryList));
    yield put(stopLoadingAction());
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* categorySaga() {
  yield takeLatest(FETCH_CATEGORY_LIST, fetchCategoryListGenerator);
}

export default categorySaga;
