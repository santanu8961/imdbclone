import { combineReducers } from "redux";
import movieReducer from "./movie/movieReducer";
import movieListeducer from "./movieList/movieListReducer";


export const rootReducer = combineReducers({
    movie:movieReducer,
    movieList:movieListeducer
})