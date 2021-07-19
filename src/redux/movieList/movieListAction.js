import { ADDTO_MOVIELIST_REQUEST } from "./movieListActionTypes"

export const addToMovieList = (movieData)=>{
    return {
        type:ADDTO_MOVIELIST_REQUEST,
        payload:movieData
    }
}