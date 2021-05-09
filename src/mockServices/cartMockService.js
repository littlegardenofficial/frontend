export const fetchCartData = userId => {
  return new Promise((resolve, reject) => {
    resolve(cartData);
  });
};

const cartData = {
  userId: 12,
  userName: 'Mritunjay Yadav',
  email: 'mj07yadav@gmail.com',
  itemCount: 0,
  cartItems: [],
};

export const addItemToCart = request => {
  // send userId and productId to the request to backend
  return new Promise((resolve, reject) => {
    resolve({
      itemId: 1,
      productId: request.id,
      productName: request.productName,
      quantity: 1,
    });
  });
};
