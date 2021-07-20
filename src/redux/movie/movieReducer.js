import { FETCH_MOVIE_REQUEST } from "./movieActionTypes";

const initialState = {
    movieData:{}
}

const MovieReducer=(state =initialState ,action)=>{
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
                return {
                    ...state,movieData:action.payload
                }
    }

    return state;
} 

export default MovieReducer;