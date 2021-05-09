import {FETCH_CATEGORY_LIST, FETCH_CATEGORY_LIST_SUCCEED} from './constants';

export const fetchCategoryList = () => {
  return {
    type: FETCH_CATEGORY_LIST,
    payload: null,
  };
};

export const fetchCategoryListSucceed = categoryList => {
  return {
    type: FETCH_CATEGORY_LIST_SUCCEED,
    payload: categoryList,
  };
};
