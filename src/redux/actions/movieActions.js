import { REQUEST_ADD_MOVIE, REQUEST_REMOVE_MOVIE } from "./constants"

export const addMovie = (movie) => {
    return {
        type: REQUEST_ADD_MOVIE,
        payload: movie
    }
}

export const removeMovie = (movieId) => {
    return {
        type: REQUEST_REMOVE_MOVIE ,
        payload: {
            id: movieId
        }
    }
}