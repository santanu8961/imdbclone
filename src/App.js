import './App.css';
import GraphComponent from './components/GraphComponent';
import MovieListComponent from './components/MovieListComponent';
import { useState } from 'react';
import AddMovieComponant from './components/AddMovieComponant';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LoaderComponent from './components/LoaderComponent';
import {NotificationContainer} from 'react-notifications';
import "../node_modules/react-notifications/dist/react-notifications.css";




function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading,setisLoading] = useState(false)

  function setModal(bool) {
    setIsOpen(bool);
  }

  return (
    <Provider store={store}>
      <NotificationContainer /> 
    <div className="App">
     <LoaderComponent isLoading={isLoading} />
      <GraphComponent />
      <div className={'addMovieDiv'}><button onClick={() => { setModal(true) }} className={'addMovieButton'}>+</button> <span style={{ color: "white" }}>Add Movie</span></div>
      <AddMovieComponant setisLoading={setisLoading} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

      <MovieListComponent />
    </div>
    </Provider>
  );
}

export default App;
