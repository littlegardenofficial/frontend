import {
  showSuccessFlashMessage,
  showWarnFlashMessage,
} from '../../utils/FlashMessageUtil';
import {
  FETCH_USER_CART_DATA_FAILED_ACTION,
  FETCH_USER_CART_DATA_SUCCEED_ACTION,
  REQUEST_ADD_ITEM_TO_CART_FAILED_ACTION,
  REQUEST_ADD_ITEM_TO_CART_SUCCEED_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_FAILED_ACTION,
  REQUEST_REMOVE_ITEM_FROM_CART_SUCCEED_ACTION,
} from '../actions/constants';
import {ADDED_TO_CART, ITEM_REMOVED_FROM_CART} from '../../utils/AppConstants';
import {isNotEmpty, isNotNullOrUndefined} from '../../utils/HelperUtil';

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
      if (
        newState != null &&
        newState.userId != null &&
        newState.userId != undefined
      ) {
        if (newState.userId === action.payload.userId) {
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
            
            newState.cartTotal = newState.cartTotal + action.payload.pricePerPack
          }
        }
      }
      showSuccessFlashMessage(ADDED_TO_CART);
      return {...newState};
    }
    case REQUEST_ADD_ITEM_TO_CART_FAILED_ACTION: {
    }
    case REQUEST_REMOVE_ITEM_FROM_CART_SUCCEED_ACTION: {
      let newState = {...state};
      if (isNotEmpty(newState.cartItems)) {
        let cartItems = [...newState.cartItems];
        let index = cartItems.findIndex(
          item => item.productId === action.payload.productId,
        );
        if (isNotNullOrUndefined(index)) {
          let itemToBeUpdated = cartItems[index];
          let quantity = itemToBeUpdated.quantity - 1;
          cartItems.splice(index, 1);
          if (quantity > 0) {
            cartItems.push({...itemToBeUpdated, quantity: quantity});
          } else {
            showWarnFlashMessage(ITEM_REMOVED_FROM_CART);
          }
          let cartTotal = newState.cartTotal - itemToBeUpdated.pricePerPack;
          let itemCount = newState.itemCount;
          if(itemCount - 1 >= 0 )
            itemCount = itemCount -  1;
            
          return {...newState , cartItems: [...cartItems] , cartTotal : cartTotal , itemCount: itemCount};
        }
      }
      return newState;
    }
    case REQUEST_REMOVE_ITEM_FROM_CART_FAILED_ACTION: {
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
