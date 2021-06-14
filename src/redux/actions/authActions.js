import {
  LOGIN_REQUEST_ACTION,
  LOGIN_REQUEST_SUCCEEDED_ACTION,
  LOGOUT_ACTION,
  REQUEST_USER_PROFILE_UPDATE_ACTION,
  REQUEST_USER_PROFILE_UPDATE_SUCCEEDED,
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

export const requestUserDataUpdateAction = (requestData) => {
  return {
    type: REQUEST_USER_PROFILE_UPDATE_ACTION,
    payload: requestData
  }
}

export const requestUserDataUpdateSucceededAction = (response) => {
  return {
    type: REQUEST_USER_PROFILE_UPDATE_SUCCEEDED,
    payload: response
  }
}