import axios from 'axios';
import {API_URL_CONSTANTS} from '../utils/AppConstants';
import {showDangerFlashMessage} from '../utils/FlashMessageUtil';

const fetchServiceLocations = () => {
  try {
    console.log('inside fetch ');
    return axios.get(API_URL_CONSTANTS.FETCH_SERVICE_LOCATIONS);
  } catch (error) {
    showDangerFlashMessage(error.errorMessage);
  }
};

export default fetchServiceLocations;
