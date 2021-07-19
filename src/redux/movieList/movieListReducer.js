import { ADDTO_MOVIELIST_REQUEST } from "./movieListActionTypes";


const initialState = {
    movieList:[]
}

const movieListeducer=(state =initialState ,action)=>{
    switch (action.type) {
        case ADDTO_MOVIELIST_REQUEST:
            let newmovieList = [...state.movieList];
            newmovieList.push(action.payload)
                return { 
                    ...state,movieList:newmovieList
                }
    }

    return state;
} 

export default movieListeducer;