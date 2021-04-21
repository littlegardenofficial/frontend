import { combineReducers } from "redux";
import movieReducer from "./movieReducers";

const rootReducer = combineReducers({
    movieList : movieReducer,
});


export default rootReducer;