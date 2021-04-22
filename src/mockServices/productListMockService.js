import {Subject, Observable} from 'rxjs';

const fetchProductList = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        productName: 'Beans French Shimla',
        productImage: null,
        productSource: 'Himachal Pradesh',
        productPrice: 59,
        discountedPrice: 45,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 12,
        stockStatus: 'ENOUGH', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 2,
        productName: 'Bottle Gourd Long (Lauki)',
        productImage: null,
        productSource: 'Panipat',
        productPrice: 19,
        discountedPrice: 16,
        perUnit: 'kg',
        packSizeRange: '400-700',
        packUnit: 'gm',
        pricePerPack: 11,
        stockStatus: 'ENOUGH', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 3,
        productName: 'Brinjal Chu Chu (Baigan)',
        productImage: null,
        productSource: 'Rajasthan',
        productPrice: 64,
        discountedPrice: 56,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 14,
        stockStatus: 'LIMITED', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 4,
        productName: 'Coccinia (Kandru)',
        productImage: null,
        productSource: 'Panipat',
        productPrice: 80,
        discountedPrice: 72,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 18,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
    ]);
  });
};

export default fetchProductList;
