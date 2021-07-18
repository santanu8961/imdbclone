export const API_KEY = '4b2eaf70';

export const BACKEND_URL = (title)=> `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURI(title)}`;