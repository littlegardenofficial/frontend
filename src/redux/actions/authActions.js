import {
  LOGIN_REQUEST_ACTION,
  LOGIN_REQUEST_SUCCEEDED_ACTION,
  LOGOUT_ACTION,
} from './constants';

export const loginRequestAction = ({email, password}) => {
  return {
    type: LOGIN_REQUEST_ACTION,
    payload: {email, password},
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
