import {isNotEmpty, isNotNullOrUndefined} from '../HelperUtil';

const parseProductListResponse = response => {
  if (
    isNotNullOrUndefined(response.data) &&
    isNotEmpty(response.data.product_list)
  ) {
    const parsedResponse = response.data.product_list.map(product => {
      return {
        ...product,
        productName: product.name,
        productImage: {uri: product.image_url},
        productSource: product.source,
        productPrice: product.price,
        discountedPrice: product.special_price,
        perUnit: 'kg',
        packSizeRange: '1',
        packUnit: 'kg',
        pricePerPack: product.special_price,
        // ENOUGH , LIMITED , SOLD_OUT
        stockStatus:
          product.stock_quantity < 10 && product.stock_quantity > 0
            ? 'LIMITED'
            : product.stock_quantity == 0
            ? 'SOLD_OUT'
            : 'ENOUGH',
      };
    });
    return parsedResponse;
  } else {
    return [];
  }
  return response;
};

export default parseProductListResponse;
