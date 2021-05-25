import ROUTES from '../routes/routeNames';
import {
  ORDER_DELIVERED,
  ORDER_IN_TRANSIT,
  ORDER_OUT_FOR_DELIVERY,
  ORDER_PLACED,
  ORDER_SHIPPED,
} from './AppConstants';
import AsyncStorage from '@react-native-community/async-storage';
import {async} from 'rxjs';

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
 * Utility to save redux state to local Storage in the form of json
 * @param {} key 
 * @param {*} data 
 */
export const saveDataInLocalStorage = async (key , data) => {
  try {
    await AsyncStorage.setItem(key, isNotNullOrUndefined(data) ?  JSON.stringify(data) : null);
  } catch (err) {
    console.log(err);
  }
}

/**
 * Utility to load redux state from local Storage in the form of json
 * @param {*} key 
 * @returns 
 */
export const loadDataFromLocalStorage = async (key ) => {
  try {
    let data = await AsyncStorage.getItem(key);
    data = isNotNullOrUndefined(data) ? JSON.parse(data) : null;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}