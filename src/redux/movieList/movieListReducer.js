import { ADDTO_MOVIELIST_REQUEST, REMOVE_FROM_MOVIELIST_REQUEST } from "./movieListActionTypes";


const initialState = {
    movieList:[]
}

const movieListeducer=(state =initialState ,action)=>{
    let newmovieList;
    switch (action.type) {
        
        case ADDTO_MOVIELIST_REQUEST:
             newmovieList = [...state.movieList];
            newmovieList.push(action.payload)
                return { 
                    ...state,movieList:newmovieList
                } 
        case REMOVE_FROM_MOVIELIST_REQUEST:
            newmovieList = [...state.movieList];
            newmovieList.splice(action.payload,1);    
            return { 
                ...state,movieList:newmovieList
            }       
             }

    return state;
} 

export default movieListeducer;