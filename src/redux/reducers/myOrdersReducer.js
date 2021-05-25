const {FETCH_MY_ORDERS_SUCCEEDED_ACTION} = require('../actions/constants');

const initialState = null;

const myOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_ORDERS_SUCCEEDED_ACTION: {
      let newState = {...action.payload};
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default myOrdersReducer;
