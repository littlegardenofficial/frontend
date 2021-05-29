import axios from 'axios';
import {API_URL_CONSTANTS} from '../utils/AppConstants';
import {showDangerFlashMessage} from '../utils/FlashMessageUtil';

const fetchCategoryList = () => {
  try {
    return axios.get(API_URL_CONSTANTS.fetchCategoryList);
  } catch (error) {
    showDangerFlashMessage(error.errorMessage);
  }
};

export default fetchCategoryList;
