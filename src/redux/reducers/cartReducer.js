import {showSuccessFlashMessage} from '../../utils/FlashMessageUtil';
import {
  FETCH_USER_CART_DATA_FAILED_ACTION,
  FETCH_USER_CART_DATA_SUCCEED_ACTION,
  REQUEST_ADD_ITEM_TO_CART_FAILED_ACTION,
  REQUEST_ADD_ITEM_TO_CART_SUCCEED_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_FAILED_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_SUCCEED_ACTION,
} from '../actions/constants';

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_CART_DATA_SUCCEED_ACTION: {
      const newState = {...action.payload};
      return newState;
    }
    case FETCH_USER_CART_DATA_FAILED_ACTION: {
      return state;
    }
    case REQUEST_ADD_ITEM_TO_CART_SUCCEED_ACTION: {
      const newState = {...state};
      console.log(newState);
      console.log(action.payload);
      if (
        newState != null &&
        newState.userId != null &&
        newState.userId != undefined
      ) {
        if (newState.userId === action.payload.userId) {
          console.log(newState.cartItems);
          console.log(action.payload);
          if (newState.cartItems != null) {
            let itemAlreadyPresent = false;
            let cartItems = newState.cartItems.map(item => {
              if (item.productId === action.payload.productId) {
                itemAlreadyPresent = true;
                return {...item, quantity: item.quantity + 1};
              }

              return item;
            });
            if (itemAlreadyPresent) {
              newState.cartItems = [...cartItems];
            } else {
              newState.cartItems = [...cartItems, {...action.payload}];
            }

            newState.itemCount = newState.cartItems
              .map(item => item.quantity)
              .reduce((total, item) => {
                return total + item;
              });
          }
        }
      }
      showSuccessFlashMessage('Added to Cart!');
      console.log('updated state', newState);
      return newState;
    }
    case REQUEST_ADD_ITEM_TO_CART_FAILED_ACTION: {
    }
    case REQUEST_REMOVE_ITEM_FROM_CART_SUCCEED_ACTION: {
    }
    case REQUEST_REMOVE_ITEM_FROM_CART_FAILED_ACTION: {
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
