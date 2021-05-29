import {FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_SEARCH_RESULT_ACTION, FETCH_PRODUCTS_SUCCEEDED, PRODUCTS_SEARCH_RESULT_RECIEVED_ACTION, REQUEST_FETCH_PRODUCTS} from './constants';

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

  export const fetchProductsSearchResult = (searchRequestPayload) => {
    return {
      type: FETCH_PRODUCTS_SEARCH_RESULT_ACTION,
      payload:  searchRequestPayload,
    }
  }

  export const productSearchResultRecieved = (data) => {
    return {
      type : PRODUCTS_SEARCH_RESULT_RECIEVED_ACTION ,
      payload : data
    }
  }