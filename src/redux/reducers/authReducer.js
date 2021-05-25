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
  SELECT_ADDRESS_FOR_DELIVERY_ACTION,
} = require('../actions/constants');
import {
  saveDataInLocalStorage,
  loadDataFromLocalStorage,
} from '../../utils/HelperUtil';

const initialState = null;
// loadDataFromLocalStorage("auth")

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCEEDED_ACTION: {
      // console.log(initialState);
      let newState = {...action.payload};
      // saveDataInLocalStorage("auth" , newState);
      showSuccessFlashMessage(LOGGED_IN_SUCCESSFULLY);
      return newState;
    }
    case LOGOUT_ACTION: {
      // saveDataInLocalStorage("auth" , null);
      showWarnFlashMessage(LOGGED_OUT_SUCCESSFULLY);
      return null;
    }
    case SELECT_ADDRESS_FOR_DELIVERY_ACTION: {
      let newState = {...state};
      let addressList = [...newState.address];
      let addressToBeSelInd = addressList.findIndex(
        addr => addr.addressId === action.payload,
      );
      let selectedAdress = addressList[addressToBeSelInd];
      addressList.splice(addressToBeSelInd, 1);
      addressList = addressList.map(addr => ({...addr, primary: false}));
      const finalState = {
        ...newState,
        address: [...addressList, {...selectedAdress, primary: true}],
      };
      return finalState;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
