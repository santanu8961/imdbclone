import logo from './logo.svg';
import './App.css';
import GraphComponent from './components/GraphComponent';
import MovieListComponent from './components/MovieListComponent';
import { useState } from 'react';
import AddMovieComponant from './components/AddMovieComponant';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function setModal(bool) {
    setIsOpen(bool);
  }

  return (
    <Provider store={store}>
    <div className="App">
      <GraphComponent />
      <div className={'addMovieDiv'}><button onClick={() => { setModal(true) }} className={'addMovieButton'}>+</button> <span style={{ color: "white" }}>Add Movie</span></div>
      <AddMovieComponant modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

      <MovieListComponent />
    </div>
    </Provider>
  );
}

export default App;
