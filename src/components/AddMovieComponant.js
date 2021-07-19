import axios from 'axios'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { fetchMovieAction } from '../redux/movie/movieAction'
import { addToMovieList } from '../redux/movieList/movieListAction'
import { BACKEND_URL } from '../util/consts'
import MovieSearchResultComponent from './MovieSearchResultComponent'
// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


function AddMovieComponant(props) {


    const [movieInp, setmovieInp] = useState('')


    console.log('props.movie',props.movie)


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.2) !important'
        },
    };

    //   Modal.setAppElement()
    return (
        <div className={'AddMovieComponant'}>
           
            <Modal isOpen={props.modalIsOpen} style={customStyles}>
                <div className={"AddMovieComponantdiv"}>
                    <a onClick={() => { props.setIsOpen(false) ; props.fetchMovieData('');setmovieInp('') }} className={'closeButton'}>X</a>

                    <div className={'searchDiv'}>
                        <input
                            style={{ backgroundColor: "inherit", padding: '2%', width: '100%', color: "white", borderRadius: "10px" }}
                            onChange={(e) => { setmovieInp(e.target.value) }}
                            value={movieInp}
                        />
                        <a  onClick={()=>{props.fetchMovieData(movieInp)}} className={movieInp=="" ? 'searchButton disableLink':"searchButton"}>Search</a>
                    </div>

                    <div className={'MovieSearchResultDiv'}>

                      {props.movie == {} ? null :<MovieSearchResultComponent movie={props.movie} />}
                    </div>

                    <button onClick={()=>{props.addMovieDataTomovieList(props.movie)}}>Add Movie</button>

                </div>
            </Modal>
          
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        movie:state.movie.movieData
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchMovieData: (val)=> {
            if(val==''){
                dispatch(fetchMovieAction({}));
                return;
            }
        axios.get(BACKEND_URL(val)).then(res=>{
            console.log(res.data);
            dispatch(fetchMovieAction(res.data));
        })
        },
        addMovieDataTomovieList:(movieData)=>{
            dispatch(addToMovieList(movieData));
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(AddMovieComponant); 
