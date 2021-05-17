import {
  showSuccessFlashMessage,
  showWarnFlashMessage,
} from '../../utils/FlashMessageUtil';
import {
  LOGGED_IN_SUCCESSFULLY,
  LOGGED_OUT_SUCCESSFULLY,
} from '../../utils/AppConstants';

const {
  LOGIN_REQUEST_SUCCEEDED_ACTION,
  LOGOUT_ACTION,
} = require('../actions/constants');

const initialState = null;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCEEDED_ACTION: {
      let newState = {...action.payload};
      showSuccessFlashMessage(LOGGED_IN_SUCCESSFULLY);
      return newState;
    }
    case LOGOUT_ACTION: {
      showWarnFlashMessage(LOGGED_OUT_SUCCESSFULLY);
      return null;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
