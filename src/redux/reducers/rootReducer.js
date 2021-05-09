import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productsReducer from './productsReducer';


const rootReducer = combineReducers({
  products: productsReducer,
  categoryProductMap: categoryReducer,
  cart: cartReducer,
});


export default rootReducer;