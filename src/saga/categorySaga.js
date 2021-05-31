import {call, put, all ,  takeLatest} from 'redux-saga/effects';
import {FETCH_CATEGORY_LIST} from '../redux/actions/constants';
import {fetchCategoryListSucceed} from '../redux/actions/categoryAction';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';
import ServiceFactory from '../config/ServiceFactory';
import {parseCategoryListResponse} from '../utils/DataParserUtils/categoryListDataParserUtil';
import { API_RESPONSE_STATUS, SOMETHING_WENT_WRONG } from '../utils/AppConstants';
import { showDangerFlashMessage } from '../utils/FlashMessageUtil';
import { generateRequestPayloadForHomePageProductList, isNotEmpty } from '../utils/HelperUtil';
import { requestFetchProducts } from '../redux/actions/productsAction';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCategoryListGenerator(action) {
  try {
    yield put(startLoadingAction());
    const response = yield call(ServiceFactory.fetchCategoryList);
    if(response.data.statusCode == API_RESPONSE_STATUS.SUCCESS){
      const parsedCategoryListData = parseCategoryListResponse(response.data);
      yield put(fetchCategoryListSucceed(parsedCategoryListData));
      
      // dispatch fetch Products action for fetching products to show on homepage for every category 
      if (isNotEmpty(parsedCategoryListData)) {
       yield all(parsedCategoryListData.filter(category => !isNotEmpty(category.productList))
          .map(category => {
            let requestObject = {
              id: category.id,
            };
            return put(requestFetchProducts(generateRequestPayloadForHomePageProductList(requestObject)));
          }));
        }

    }else{
      showDangerFlashMessage(response.errorMessage);
    }
    yield put(stopLoadingAction());
  } catch (e) {
    console.error(e);
    showDangerFlashMessage(SOMETHING_WENT_WRONG);
    yield put(stopLoadingAction());
    throw e;
  }
}

function* categorySaga() {
  yield takeLatest(FETCH_CATEGORY_LIST, fetchCategoryListGenerator);
}

export default categorySaga;
