import {call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {FETCH_PRODUCTS_SEARCH_RESULT_ACTION, REQUEST_FETCH_PRODUCTS} from '../redux/actions/constants';
import {fetchProductsSucceeded, productSearchResultRecieved} from '../redux/actions/productsAction';
import ServiceFactory from '../config/ServiceFactory';
import parseProductListResponse from '../utils/DataParserUtils/productListDataParserUtil';
import { isNotNullOrUndefined } from '../utils/HelperUtil';
import { startLoadingAction, stopLoadingAction } from '../redux/actions/loadingAction';
import { showDangerFlashMessage } from '../utils/FlashMessageUtil';
import { SOMETHING_WENT_WRONG } from '../utils/AppConstants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts(action) {
  try {
    yield put(startLoadingAction());
    const response = yield call(
      ServiceFactory.fetchProductList,
      action.payload,
    );
    if(isNotNullOrUndefined(response.data)){
      let parsedProductList = parseProductListResponse(response.data);
      yield put(fetchProductsSucceeded([{categoryId : action.payload.category_id} ,...parsedProductList]));
    }else{

    }
    yield put(stopLoadingAction());
  } catch (e) {
    console.error(e);
    showDangerFlashMessage(SOMETHING_WENT_WRONG + " while fetching Products !");
    yield put(stopLoadingAction());
  }
}


function* fetchSearchProductsResults(action) {
  try {
    yield put(startLoadingAction());
    console.log(action.payload);
    const response = yield call(
      ServiceFactory.fetchSearchProductResult,
      action.payload,
    );
    if(isNotNullOrUndefined(response.data)){
      let parsedProductList = parseProductListResponse(response.data);
      console.log('from search resulst');
      console.log(parsedProductList);
      yield put(productSearchResultRecieved([...parsedProductList]));
    }else{

    }
    yield put(stopLoadingAction());
  } catch (e) {
    console.error(e);
    showDangerFlashMessage(SOMETHING_WENT_WRONG + " while fetching Products !");
    yield put(stopLoadingAction());
  }
}

function* productDataSaga() {
  yield takeEvery(REQUEST_FETCH_PRODUCTS, fetchProducts);
}

function* productSearchResultSaga() {
  yield takeLatest(FETCH_PRODUCTS_SEARCH_RESULT_ACTION, fetchSearchProductsResults);
}

function* productSaga() {
  yield fork(productDataSaga);
  yield fork(productSearchResultSaga)
}

export default productSaga;
