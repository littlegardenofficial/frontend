const {
  START_LOADING_ACTION,
  STOP_LOADING_ACTION,
} = require('../actions/constants');

const initialState = false;
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_ACTION:
      return true;
    case STOP_LOADING_ACTION:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
