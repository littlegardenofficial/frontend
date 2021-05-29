import {
  FETCH_CATEGORY_LIST_FAILED,
  FETCH_CATEGORY_LIST_SUCCEED,
  FETCH_PRODUCTS_SUCCEEDED,
} from '../actions/constants';

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_LIST_SUCCEED: {
      const newState = [...action.payload];
      return newState;
    }
    case FETCH_CATEGORY_LIST_FAILED: {
      return state;
    }
    case FETCH_PRODUCTS_SUCCEEDED: {
      const newState = [...state];
      let index = newState.findIndex(
        category => category.id === action.payload[0].categoryId,
      );
      let newProductList = [...action.payload];
      newProductList.splice(0, 1);
      let categoryToBeUpdated = {
        ...newState[index],
        productList: [...newProductList],
      };
      newState.splice(index, 1);
      return [...newState, {...categoryToBeUpdated}];
    }
    default: {
      return state;
    }
  }
};

export default categoryReducer;
