import {SERVICE_LOCATIONS_RECEIVED} from '../actions/constants';

const initialState = null;

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_LOCATIONS_RECEIVED: {
      // console.log(initialState);
      let newState = [...action.payload];
      console.log(newState);
      // saveDataInLocalStorage("auth" , newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default locationReducer;
