import axios from 'axios';
import { API_URL_CONSTANTS } from '../utils/AppConstants';

export const loginRequest = (requestPayload) => {
  var data = { ...requestPayload };
  console.log(data);
  var config = {
    method: 'get',
    url: API_URL_CONSTANTS.LOGIN_USER,
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };
  console.log(API_URL_CONSTANTS.LOGIN_USER);
  return axios(config);
};

export const registerRequest = requestPayload => {
  console.log(requestPayload);
  var config = {
    method: 'post',
    url: API_URL_CONSTANTS.REGISTER_USER,
    headers: {
      'Content-Type': 'application/json',
    },
    data: requestPayload,
  };
  return axios(config);
};

export const updateUserProfileRequest = requestPayload => {
  console.log(requestPayload);
  var config = {
    method: 'post',
    url: API_URL_CONSTANTS.REGISTER_USER,
    headers: {
      'Content-Type': 'application/json',
    },
    data: requestPayload,
  };
  return axios(config);
};

export const forgotPasswordRequest = (requestPayload) => {
  var data = { ...requestPayload };
  console.log(data);
  var config = {
    method: 'post',
    url: API_URL_CONSTANTS.FORGOT_PASSWORD,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  console.log(API_URL_CONSTANTS.FORGOT_PASSWORD);
  return axios(config);
};

export const verifyForgotPasswordRequest = (requestPayload) => {
  var data = { ...requestPayload };
  console.log(data);
  var config = {
    method: 'get',
    url: API_URL_CONSTANTS.VERIFY_FORGOT_PASSWORD,
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };
  console.log(API_URL_CONSTANTS.FORGOT_PASSWORD);
  return axios(config);
};

export const forgotChangePasswordRequest = (requestPayload, authToken) => {
  console.log(requestPayload);
  console.log(authToken);
  var config = {
    method: 'put',
    url: API_URL_CONSTANTS.FORGOT_CHANGE_PASSWORD,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken,
    },
    data: requestPayload,
  };
  return axios(config);
};