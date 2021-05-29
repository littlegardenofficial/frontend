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
  cartTotal: 0,
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

export const removeItemFromCart = request => {
  // send userId and productId to the request to backend
  return new Promise((resolve, reject) => {
    resolve({message: 'Item Removed'});
  });
};

export const placeOrderRequest = request => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({message: 'Order Placed Successfully'});
    }, 1000);
  });
};
