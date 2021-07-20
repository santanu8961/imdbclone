import { ADDTO_MOVIELIST_REQUEST, REMOVE_FROM_MOVIELIST_REQUEST } from "./movieListActionTypes"

export const addToMovieList = (movieData)=>{
    return {
        type:ADDTO_MOVIELIST_REQUEST,
        payload:movieData
    }
}

export const removefromMovieList = (index)=>{
   return {
        type:REMOVE_FROM_MOVIELIST_REQUEST,
        payload:index
    }
}