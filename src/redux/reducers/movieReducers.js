import { REQUEST_ADD_MOVIE, REQUEST_REMOVE_MOVIE } from "../actions/constants";
import { removeMovie } from "../actions/movieActions";

const initialState = [
    {title: 'avengers 1', key: 1},
    {title: 'avengers 2', key: 2},
    {title: 'avengers 3', key: 3},
    {title: 'avengers 4', key: 4},
  ];

const movieReducer = (state = initialState , action) => {
    switch(action.type){
        case REQUEST_ADD_MOVIE : {
            const newState =  [...state , action.payload];
            return newState;
        }
        case REQUEST_REMOVE_MOVIE : {
            return state.filter((movie) => movie.key !== action.payload.id);
        }
        default:{
            return state;
        } 
    }
}

export default movieReducer;