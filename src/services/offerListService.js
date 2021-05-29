const fetchOfferList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(offerList);
    }, 1000);;
  });
};

const offerList = [
  {id: 1, offerName: 'Holi offer', offerImage: null},
  {id: 2, offerName: 'Navratri offer', offerImage: null},
  {id: 3, offerName: 'Vrat offer', offerImage: null},
  {id: 4, offerName: 'Lockdown offer', offerImage: null},
];

export default fetchOfferList;
