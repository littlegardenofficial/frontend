const {
  FETCH_USER_CART_DATA_ACTION,
  REQUEST_ADD_ITEM_TO_CART_ACTION,
  REQUEST_ADD_ITEM_TO_CART_SUCCEED_ACTION,
  REQUEST_ADD_ITEM_TO_CART_FAILED_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_SUCCEED_ACTION,
  REQUEST_ADD_ITEM_FROM_CART_FAILED_ACTION,
  FETCH_USER_CART_DATA_SUCCEED_ACTION,
} = require('./constants');

export const fetchUserCartAction = userId => {
  return {
    type: FETCH_USER_CART_DATA_ACTION,
    payload: userId,
  };
};

export const fetchUserCartSucceedAction = cartData => {
  return {
    type: FETCH_USER_CART_DATA_SUCCEED_ACTION,
    payload: cartData,
  };
};

export const fetchUserCartFailedAction = error => {
  return {
    type: FETCH_USER_CART_DATA_ACTION_FAILED,
    payload: error,
  };
};

export const requestAddItemToCartAction = item => {
  return {
    type: REQUEST_ADD_ITEM_TO_CART_ACTION,
    payload: item,
  };
};

export const requestAddItemToCartSucceedAction = item => {
  return {
    type: REQUEST_ADD_ITEM_TO_CART_SUCCEED_ACTION,
    payload: item,
  };
};

export const requestAddItemToCartFailedAction = error => {
  return {
    type: REQUEST_ADD_ITEM_TO_CART_FAILED_ACTION,
    payload: item,
  };
};

export const requestRemoveItemFromCartAction = item => {
  return {
    type: REQUEST_REMOVE_ITEM_FROM_CART_ACTION,
    payload: item,
  };
};

export const requestRemoveItemFromCartSucceedAction = item => {
  return {
    type: REQUEST_REMOVE_ITEM_FROM_CART_SUCCEED_ACTION,
    payload: item,
  };
};

export const requestRemoveItemFromCartFailedAction = error => {
  return {
    type: REQUEST_ADD_ITEM_FROM_CART_FAILED_ACTION,
    payload: item,
  };
};
