import ROUTES from '../routes/routeNames';
import {
  ORDER_DELIVERED,
  ORDER_IN_TRANSIT,
  ORDER_OUT_FOR_DELIVERY,
  ORDER_PLACED,
  ORDER_SHIPPED,
  patternEmail,
  patternMobile,
  SOMETHING_WENT_WRONG,
} from './AppConstants';

import {async} from 'rxjs';
import { showDangerFlashMessage } from './FlashMessageUtil';
import InterCommRoutingService from '../services/interCommRoutingService';

/**
 * this method returns boolean value if object is not null and not undefined
 * @param {any object } obj
 * @returns
 */
export const isNotNullOrUndefined = obj => {
  if (obj != null && obj != undefined) {
    return true;
  } else {
    return false;
  }
};

/**
 * this method returns boolean value if array is not null and not undefined and also not empty
 * @param {array object } obj
 * @returns
 */
export const isNotEmpty = arr => {
  if (arr != null && arr != undefined && arr.length != 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Sorts products on the basis of id
 *
 * @param {product} a
 * @param {product} b
 * @returns
 */
export function sortProductByProductId(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

/**
 * Sorts categories on the basis of id
 *
 * @param {product} a
 * @param {product} b
 * @returns
 */
 export function sortCategoryById(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

/**
 * Sorts address on the basis of id
 *
 * @param {address} a
 * @param {address} b
 * @returns
 */
 export function sortAddressByAddressId(a, b) {
  if (a.addressId < b.addressId) {
    return -1;
  }
  if (a.addressId > b.addressId) {
    return 1;
  }
  return 0;
}


/**
 *  For rendering icon according to routeName on the sideMenu
 * @param {*} routeName
 * @returns
 */
export const getIconNameFromRouteNameForSideMenu = routeName => {
  let iconName = '';
  if (isNotNullOrUndefined(routeName)) {
    switch (routeName) {
      case ROUTES.HOME:
        iconName = 'home';
        break;
      case ROUTES.PROFILE:
        iconName = 'person';
        break;
      case ROUTES.SERVICE_AREAS:
        iconName = 'map';
        break;
      case ROUTES.MY_ORDERS:
        iconName = 'list';
        break;
      case ROUTES.HELP_AND_SUPPORT:
        iconName = 'support';
        break;
      default:
        break;
    }
  }

  return iconName;
};

/**
 *  For rendering Title according to routeName on the sideMenu
 * @param {*} routeName
 * @returns
 */
export const getTitleFromRouteNameForSideMenu = routeName => {
  let title = '';
  if (isNotNullOrUndefined(routeName)) {
    switch (routeName) {
      case ROUTES.HOME:
        title = 'Home';
        break;
      case ROUTES.PROFILE:
        title = 'My Profile';
        break;
      case ROUTES.SERVICE_AREAS:
        title = 'Serviceable Areas';
        break;
      case ROUTES.MY_ORDERS:
        title = 'My Orders';
        break;
      case ROUTES.HELP_AND_SUPPORT:
        title = 'Help And Support';
        break;
      default:
        title = routeName;
        break;
    }
  }

  return title;
};

/**
 *  return Order Status Title for orders
 * @param {*} orderStatus 
 * @returns 
 */
export const getOrderStatusTitle = orderStatus => {
  let orderStatusTitle = '';
  switch (orderStatus) {
    case ORDER_PLACED:
      orderStatusTitle = 'Placed';
      break;
    case ORDER_DELIVERED:
      orderStatusTitle = 'Delivered';
      break;
    case ORDER_SHIPPED:
      orderStatusTitle = 'Shipped';
      break;
    case ORDER_IN_TRANSIT:
      orderStatusTitle = 'In Transit';
      break;
    case ORDER_OUT_FOR_DELIVERY:
      orderStatusTitle = 'Out for Delivery';
      break;
    default:
      break;
  }

  return orderStatusTitle;
};

/**
 * creates request payload for fetching products to show on homepage 
 * @param {*} param0 
 * @returns 
 */
export const generateRequestPayloadForHomePageProductList = ({id}) => {
  return {
    category_id: id,
    sort_type: 'name',
    sort_order: 'asc',
    include_in_homepage: true,
    is_only_enabled: true,
    page_size: 5,
    current_page: 0,
  };
};

/**
 * creates request payload for fetching products on category page
 * @param {*} param0
 * @returns
 */
export const generateRequestPayloadForCategoryPageProductList = ({
  id,
  productCount,
}) => {
  return {
    category_id: id,
    sort_type: 'name',
    sort_order: 'asc',
    is_only_enabled: true,
    page_size: productCount,
    current_page: 0,
  };
};

 /**
 * creates request payload for searching products
 * @param {*} param0 
 * @returns 
 */
  export const generateRequestPayloadForProductSearch = ({searchString}) => {
    return {
      query: searchString,
      sort_type: 'price',
      sort_order: 'asc',
    };
  };

/**
 * utility to handle and show error in flash message
 * @param {*} err 
 */
export const genericExceptionHandling = err => {
  if (err.response) {
    // client received an error response (5xx, 4xx)
    console.log(err.response);
    showDangerFlashMessage(err.response.data.errorMessage);
  } else if (err.request) {
    // client never received a response, or request never left
    console.log(err.request);
    showDangerFlashMessage(err.request.data.errorMessage);
  } else {
    // anything else
    console.log(err);
    showDangerFlashMessage(SOMETHING_WENT_WRONG);
  }
};

/**
 * Utility to validate mobile number
 * @param {*} data 
 * @returns 
 */
export const isMobileNumber = (data) => {
  if (isNotNullOrUndefined(data)) {
    return patternMobile.test(data);
  } else {
    return false;
  }
}

/**
 * Utility to validate email address
 * @param {*} data 
 * @returns 
 */
export const isEmailAddress = (data) => {
  if (isNotNullOrUndefined(data)) {
    return patternEmail.test(data);
  } else {
    return false;
  }
}

/**
 * Utility to validate password
 * @param {*} data 
 * @returns 
 */
export const isValidPassword = (data) => {
  if (isNotNullOrUndefined(data.trim()) && data.trim().length <= 10) {
    return true;
  } else {
    return false;
  }
}

onPressPlace = () => {
  console.log('place');
};

/**
 * Utility to open calling app for calling
 * @param {*} data 
 * @returns 
 */
onPressTel = number => {
  Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));
};

/**
 * Utility to open sms app for sending sms
 * @param {*} data 
 * @returns 
 */
onPressSms = () => {
  console.log('sms');
};

/**
 * Utility to open email app for sending email
 * @param {*} data 
 * @returns 
 */
onPressEmail = email => {
  Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
    console.log('Error:', err),
  );
};
