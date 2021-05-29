import {isNotNullOrUndefined, sortCategoryById} from '../HelperUtil';

export const parseCategoryListResponse = response => {
  if (
    isNotNullOrUndefined(response.data) &&
    isNotNullOrUndefined(response.data.category_list)
  ) {
    const parsedResponse = response.data.category_list.map(category => {
      return {
        ...category,
        categoryName: category.name,
        categoryTitle: category.name,
        filterImage: {uri: category.image_url},
        productCount: category.no_of_products,
        productList: [],
      };
    });
    return parsedResponse.sort(sortCategoryById);
  } else {
    return [];
  }
};
