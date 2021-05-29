import ROUTES from '../routes/routeNames';
import {
  ORDER_DELIVERED,
  ORDER_IN_TRANSIT,
  ORDER_OUT_FOR_DELIVERY,
  ORDER_PLACED,
  ORDER_SHIPPED,
} from './AppConstants';

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