export const API_KEY = '4b2eaf70';

export const BACKEND_URL = (title)=> `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURI(title)}`;

export  const isEmpty = (obj)=> {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}