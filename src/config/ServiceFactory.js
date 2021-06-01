import fetchMockCategoryList from '../mockServices/categoryListMockService';
import fetchMockProductList from '../mockServices/productListMockService';
import fetchProductList from '../services/productListService';
import fetchCategoryList from '../services/categoryListService';
import AppConfig from './AppConfig';
import searchProductsService from '../services/searchProductsService';
import fetchServiceLocations from '../services/locationService';

class ServiceFactory {
  static fetchCategoryList = false ? fetchMockCategoryList : fetchCategoryList;

  static fetchProductList = false ? fetchMockProductList : fetchProductList;

  static fetchSearchProductResult = false
    ? searchProductsService
    : searchProductsService;

  static fetchServiceLocations = false
    ? fetchServiceLocations
    : fetchServiceLocations;
  // static static fetchCategoryList  = AppConfig.STAND_ALONE ?  fetchCategoryList : fetchCategoryListUtil ;
  // static static fetchCategoryList  = AppConfig.STAND_ALONE ?  fetchCategoryList : fetchCategoryListUtil ;
  // static static fetchCategoryList  = AppConfig.STAND_ALONE ?  fetchCategoryList : fetchCategoryListUtil ;
  // static static fetchCategoryList  = AppConfig.STAND_ALONE ?  fetchCategoryList : fetchCategoryListUtil ;
  // static static fetchCategoryList  = AppConfig.STAND_ALONE ?  fetchCategoryList : fetchCategoryListUtil ;
  // static static fetchCategoryList  = AppConfig.STAND_ALONE ?  fetchCategoryList : fetchCategoryListUtil ;
}

export default ServiceFactory;
