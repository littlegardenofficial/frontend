import AppConfig from "../config/AppConfig";

export const ADDED_TO_CART = 'Added to Cart!';
export const ITEM_REMOVED_FROM_CART = 'Item removed from Cart!';
export const PROCEED_TO_CHECKOUT = 'Proceed to Checkout!';
export const LOGGED_IN_SUCCESSFULLY = 'Logged in Successfully !';
export const LOGGED_OUT_SUCCESSFULLY = 'Logged out Successfully !';
export const PLEASE_LOGIN_TO_ADD_TO_CART = 'Please login to add items in cart!';
export const ORDER_PLACED = 'PLACED';
export const ORDER_SHIPPED = 'SHIPPED';
export const ORDER_IN_TRANSIT = 'IN_TRANSIT';
export const ORDER_OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY';
export const ORDER_DELIVERED = 'DELIVERED';
export const SOMETHING_WENT_WRONG = 'Something went wrong';
export const PLEASE_ENTER_VALID_SEARCH_STRING = 'Please enter a valid string !';

export const API_URL_CONSTANTS = {
  fetchCategoryList: AppConfig.BASE_URL + 'catalog/category/list',
  FETCH_PRODUCT_LIST: AppConfig.BASE_URL + 'catalog/product/list',
  SEARCH_PRODUCT: AppConfig.BASE_URL + 'catalog/product/search',
  FETCH_SERVICE_LOCATIONS: AppConfig.BASE_URL + 'service/location/list',
  REGISTER_USER: AppConfig.BASE_URL + 'customer/profile/create',
  LOGIN_USER: AppConfig.BASE_URL + 'customer/profile/login',
  FORGOT_PASSWORD: AppConfig.BASE_URL + 'customer/forgot-password/create',
  VERIFY_FORGOT_PASSWORD: AppConfig.BASE_URL + 'customer/forgot-password/verify',
  FORGOT_CHANGE_PASSWORD: AppConfig.BASE_URL + 'customer/forgot-password/change',
};

export const API_RESPONSE_STATUS = {
    SUCCESS : 200,
}

export const patternMobile = /^\d{10}$/;
export const patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const COMMON_AUTH_FLOWS = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  VERIFY_FORGOT_PASSWORD: 'VERIFY_FORGOT_PASSWORD',
}