import {
  LOGIN_REQUEST_ACTION,
  LOGIN_REQUEST_SUCCEEDED_ACTION,
  LOGOUT_ACTION,
} from './constants';

export const loginRequestAction = payload => {
  return {
    type: LOGIN_REQUEST_ACTION,
    payload: payload,
  };
};

export const loginRequestActionSucceeded = userData => {
  return {
    type: LOGIN_REQUEST_SUCCEEDED_ACTION,
    payload: {...userData},
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT_ACTION,
    payload: null,
  };
};
