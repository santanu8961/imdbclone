import { combineReducers } from "redux";
import movieReducer from "./movie/movieReducer";


export const rootReducer = combineReducers({
    movie:movieReducer
})