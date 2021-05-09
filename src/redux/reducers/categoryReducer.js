import {
  FETCH_CATEGORY_LIST_FAILED,
  FETCH_CATEGORY_LIST_SUCCEED,
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
    default: {
      return state;
    }
  }
};

export default categoryReducer;
