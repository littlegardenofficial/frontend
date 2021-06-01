import {FETCH_SERVICE_LOCATIONS_ACTION} from '../redux/actions/constants';
import ServiceFactory from '../config/ServiceFactory';
import {API_RESPONSE_STATUS, SOMETHING_WENT_WRONG} from '../utils/AppConstants';
import {serviceLocationsReceived} from '../redux/actions/serviceLocationAction';
import parseServiceLocationsResponse from '../utils/DataParserUtils/serviceLocationDataParserUtil';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  startLoadingAction,
  stopLoadingAction,
} from '../redux/actions/loadingAction';
import {showDangerFlashMessage} from '../utils/FlashMessageUtil';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchServiceLocationsGenerator(action) {
  try {
    yield put(startLoadingAction());
    console.log('here');
    const response = yield call(ServiceFactory.fetchServiceLocations, null);
    if (response.data.statusCode == API_RESPONSE_STATUS.SUCCESS) {
      const parsedServiceLocations = parseServiceLocationsResponse(
        response.data,
      );
      yield put(serviceLocationsReceived(parsedServiceLocations));
    } else {
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

function* serviceLocationSaga() {
  yield takeLatest(
    FETCH_SERVICE_LOCATIONS_ACTION,
    fetchServiceLocationsGenerator,
  );
}

export default serviceLocationSaga;
