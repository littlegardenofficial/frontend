import searchProductsService from '../../services/searchProductsService';

const {
  PRODUCTS_SEARCH_RESULT_RECIEVED_ACTION,
} = require('../actions/constants');

const initialState = [];
const searchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_SEARCH_RESULT_RECIEVED_ACTION: {
      let newState = [...action.payload];
      return newState;
    }
    default: {
      return [...state];
    }
  }
};

export default searchProductReducer;
