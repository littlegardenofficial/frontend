import axios from 'axios';
import { API_URL_CONSTANTS } from '../utils/AppConstants';

export const loginRequest = (requestPayload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(successLoginData);
    }, 1000);
  });
};

export const registerRequest = (requestPayload) => {
  try {
    console.log(requestPayload);
    var config = {
      method: 'post',
      url: API_URL_CONSTANTS.REGISTER_USER,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : requestPayload
    };
    return axios(config);
  } catch (error) {
    showDangerFlashMessage(error.errorMessage);
  }
};