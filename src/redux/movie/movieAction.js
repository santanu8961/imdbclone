import { FETCH_MOVIE_REQUEST } from "./movieActionTypes"

export const fetchMovieAction = (movieData)=>{
    return {
        type:FETCH_MOVIE_REQUEST,
        payload:movieData
    }
}