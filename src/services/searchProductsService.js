import {API_URL_CONSTANTS, SOMETHING_WENT_WRONG} from '../utils/AppConstants';
import {showDangerFlashMessage} from '../utils/FlashMessageUtil';
import axios from 'axios';

const searchProductsService = request => {
  try {
    var data = {...request};
    var config = {
      method: 'get',
      url: API_URL_CONSTANTS.SEARCH_PRODUCT,
      headers: {
        'Content-Type': 'application/json',
      },
      params: data,
    };
    console.log(API_URL_CONSTANTS.SEARCH_PRODUCT);
    return axios(config);
  } catch (error) {
    showDangerFlashMessage(SOMETHING_WENT_WRONG + ' !');
  }
};

export default searchProductsService;
