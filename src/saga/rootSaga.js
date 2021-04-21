import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {REQUEST_FETCH_PRODUCTS} from '../redux/actions/constants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* removeMovie(action) {
   try {
       console.log('request remove movie message from saga' , action.payload)
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUEST_FETCH_PRODUCTS, removeMovie);
}

export default mySaga;