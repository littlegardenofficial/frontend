import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  products: productsReducer,
  categoryProductMap: categoryReducer,
  cart: cartReducer,
  auth: authReducer,
});


export default rootReducer;