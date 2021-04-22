import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCEEDED,
  REQUEST_FETCH_PRODUCTS,
} from '../actions/constants';

const initialState = {loaded: false, productList: []};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCEEDED: {
      const newState = {loaded: true, productList: [...action.payload]};
      return newState;
    }
    case FETCH_PRODUCTS_FAILED: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
