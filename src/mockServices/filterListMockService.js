const fetchFilters = () => {
  return new Promise((resolve, reject) => {
    resolve(filterList);
  });
};

const filterList = [
  {id: 1, filterName: 'Fruits', filterImage: null, filterCategory: 'FRUITS'},
  {
    id: 2,
    filterName: 'Vegetables',
    filterImage: null,
    filterCategory: 'VEGETABLES',
  },
  {id: 3, filterName: 'Cereals', filterImage: null, filterCategory: 'CEREALS'},
  {
    id: 4,
    filterName: 'Navratri',
    filterImage: null,
    filterCategory: 'NAVRATRI',
  },
];

export default fetchFilters;
