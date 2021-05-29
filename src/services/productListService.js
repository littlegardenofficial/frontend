import {API_URL_CONSTANTS, SOMETHING_WENT_WRONG} from '../utils/AppConstants';
import {showDangerFlashMessage} from '../utils/FlashMessageUtil';
import axios from 'axios';

const fetchProductList = request => {
  try {
    var data = {...request};
    var config = {
      method: 'get',
      url: API_URL_CONSTANTS.FETCH_PRODUCT_LIST,
      headers: {
        'Content-Type': 'application/json',
      },
      params: data,
    };

    return axios(config);
  } catch (error) {
    showDangerFlashMessage(SOMETHING_WENT_WRONG + ' !');
  }
};

export default fetchProductList;
