import ROUTES from '../routes/routeNames';

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
