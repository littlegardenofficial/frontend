const fetchCategoryList = () => {
  return new Promise((resolve, reject) => {
    resolve(categoryList);
  });
};

const categoryList = [
  {
    id: 1,
    categoryName: 'VEGETABLES',
    categoryTitle: 'Vegetables',
    filterImage: require('../../assets/images/vegetablesCategory.jpg'),
    productCount: 150,
    productList: [
      {
        id: 1,
        productName: 'Beans French Shimla',
        productImage: require('../../assets/images/download.jpg'),
        productSource: 'Himachal Pradesh',
        productPrice: 59,
        discountedPrice: 45,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 12,
        stockStatus: 'LIMITED', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 2,
        productName: 'Bottle Gourd Long (Lauki)',
        productImage: require('../../assets/images/bottlegourd.jpg'),
        productSource: 'Panipat',
        productPrice: 19,
        discountedPrice: 16,
        perUnit: 'kg',
        packSizeRange: '400-700',
        packUnit: 'gm',
        pricePerPack: 11,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 3,
        productName: 'Brinjal Chu Chu (Baigan)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Rajasthan',
        productPrice: 64,
        discountedPrice: 56,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 14,
        stockStatus: 'ENOUGH', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 4,
        productName: 'Coccinia (Kandru)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Panipat',
        productPrice: 80,
        discountedPrice: 72,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 18,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
    ],
  },
  {
    id: 2,
    categoryName: 'FRUITS',
    categoryTitle: 'Fruits',
    filterImage: require('../../assets/images/fruitsCategory.jpg'),
    productCount: 150,
    productList: [
      {
        id: 1,
        productName: 'Beans French Shimla',
        productImage: require('../../assets/images/download.jpg'),
        productSource: 'Himachal Pradesh',
        productPrice: 59,
        discountedPrice: 45,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 12,
        stockStatus: 'LIMITED', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 2,
        productName: 'Bottle Gourd Long (Lauki)',
        productImage: require('../../assets/images/bottlegourd.jpg'),
        productSource: 'Panipat',
        productPrice: 19,
        discountedPrice: 16,
        perUnit: 'kg',
        packSizeRange: '400-700',
        packUnit: 'gm',
        pricePerPack: 11,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 3,
        productName: 'Brinjal Chu Chu (Baigan)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Rajasthan',
        productPrice: 64,
        discountedPrice: 56,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 14,
        stockStatus: 'ENOUGH', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 4,
        productName: 'Coccinia (Kandru)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Panipat',
        productPrice: 80,
        discountedPrice: 72,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 18,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
    ],
  },
  {
    id: 3,
    categoryName: 'CEREALS',
    categoryTitle: 'Cereals/Spices',
    filterImage: require('../../assets/images/cereals.jpg'),
    productCount: 150,
    productList: [
      {
        id: 1,
        productName: 'Beans French Shimla',
        productImage: require('../../assets/images/download.jpg'),
        productSource: 'Himachal Pradesh',
        productPrice: 59,
        discountedPrice: 45,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 12,
        stockStatus: 'LIMITED', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 2,
        productName: 'Bottle Gourd Long (Lauki)',
        productImage: require('../../assets/images/bottlegourd.jpg'),
        productSource: 'Panipat',
        productPrice: 19,
        discountedPrice: 16,
        perUnit: 'kg',
        packSizeRange: '400-700',
        packUnit: 'gm',
        pricePerPack: 11,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 3,
        productName: 'Brinjal Chu Chu (Baigan)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Rajasthan',
        productPrice: 64,
        discountedPrice: 56,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 14,
        stockStatus: 'ENOUGH', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 4,
        productName: 'Coccinia (Kandru)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Panipat',
        productPrice: 80,
        discountedPrice: 72,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 18,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
    ],
  },
  {
    id: 4,
    categoryName: 'NAVRATRI',
    categoryTitle: 'Navratri',
    filterImage: require('../../assets/images/fruitsCategory.jpg'),
    productCount: 150,
    productList: [
      {
        id: 1,
        productName: 'Beans French Shimla',
        productImage: require('../../assets/images/download.jpg'),
        productSource: 'Himachal Pradesh',
        productPrice: 59,
        discountedPrice: 45,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 12,
        stockStatus: 'LIMITED', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 2,
        productName: 'Bottle Gourd Long (Lauki)',
        productImage: require('../../assets/images/bottlegourd.jpg'),
        productSource: 'Panipat',
        productPrice: 19,
        discountedPrice: 16,
        perUnit: 'kg',
        packSizeRange: '400-700',
        packUnit: 'gm',
        pricePerPack: 11,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 3,
        productName: 'Brinjal Chu Chu (Baigan)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Rajasthan',
        productPrice: 64,
        discountedPrice: 56,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 14,
        stockStatus: 'ENOUGH', // ENOUGH , LIMITED , SOLD_OUT
      },
      {
        id: 4,
        productName: 'Coccinia (Kandru)',
        productImage: require('../../assets/images/brinjalchu.jpg'),
        productSource: 'Panipat',
        productPrice: 80,
        discountedPrice: 72,
        perUnit: 'kg',
        packSizeRange: '200 - 250',
        packUnit: 'gm',
        pricePerPack: 18,
        stockStatus: 'SOLD_OUT', // ENOUGH , LIMITED , SOLD_OUT
      },
    ],
  },
];

export default fetchCategoryList;
