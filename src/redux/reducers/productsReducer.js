import {
  ADD_PRODUCT_TO_CART,
  REQUEST_FETCH_PRODUCTS,
} from '../actions/constants';

const initialState = [
  {title: 'avengers 1', key: 1},
  {title: 'avengers 2', key: 2},
  {title: 'avengers 3', key: 3},
  {title: 'avengers 4', key: 4},
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case REQUEST_FETCH_PRODUCTS: {
    //   const newState = [...state, action.payload];
    //   return newState;
    // }
    // case ADD_PRODUCT_TO_CART: {
    //   return state.filter(movie => movie.key !== action.payload.id);
    // }
    default: {
      return state;
    }
  }
};

export default productsReducer;
