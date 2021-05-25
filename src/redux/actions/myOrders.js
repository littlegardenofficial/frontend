import {
  FETCH_MY_ORDERS_ACTION,
  FETCH_MY_ORDERS_SUCCEEDED_ACTION,
} from './constants';

export const fetchMyOrdersAction = userId => {
  return {
    type: FETCH_MY_ORDERS_ACTION,
    payload: userId,
  };
};

export const fetchMyOrderSuccededAction = data => {
  return {
    type: FETCH_MY_ORDERS_SUCCEEDED_ACTION,
    payload: data,
  };
};
