import {FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_SUCCEEDED, REQUEST_FETCH_PRODUCTS} from './constants';

export const requestFetchProducts = (filter) => {
  return {
    type: REQUEST_FETCH_PRODUCTS,
    payload: filter,
  };
};

export const fetchProductsSucceeded = (payload) => {
    return {
      type: FETCH_PRODUCTS_SUCCEEDED,
      payload: payload,
    };
  };

  export const fetchProductsFailed = (error) => {
    return {
      type: FETCH_PRODUCTS_FAILED,
      payload: error,
    };
  };