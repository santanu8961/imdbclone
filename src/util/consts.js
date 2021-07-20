import { NotificationManager } from "react-notifications";

export const API_KEY = '4b2eaf70';

export const BACKEND_URL = (title)=> `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURI(title)}`;

export  const isEmpty = (obj)=> {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}




export const triggerNotification = (type,message)=>{
    switch (type) {
        case 'info':
          NotificationManager.info(message);
          break;
        case 'success':
          NotificationManager.success(message, 'Success');
          break;
        case 'warning':
          NotificationManager.warning(message, 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error(message,'Error', 5000, () => {
            // alert('callback');
          });
          break;
      }
}