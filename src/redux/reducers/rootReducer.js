import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import orderPlacedDialog from './orderPlacedDialogReducer';
import myOrdersReducer from './myOrdersReducer';
import searchProductReducer from './searchProductsReducer';



const rootReducer = combineReducers({
  products: productsReducer,
  categoryProductMap: categoryReducer,
  cart: cartReducer,
  auth: authReducer,
  isLoading: loadingReducer,
  orderPlacedDialog: orderPlacedDialog,
  orders: myOrdersReducer,
  searchResults: searchProductReducer,
});


export default rootReducer;