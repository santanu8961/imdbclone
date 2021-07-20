import axios from 'axios'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { fetchMovieAction } from '../redux/movie/movieAction'
import { addToMovieList } from '../redux/movieList/movieListAction'
import { BACKEND_URL, isEmpty, triggerNotification } from '../util/consts'
import MovieSearchResultComponent from './MovieSearchResultComponent'
// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


function AddMovieComponant(props) {


    const [movieInp, setmovieInp] = useState('');



   


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
           
            <Modal ariaHideApp={false} isOpen={props.modalIsOpen} style={customStyles}>
                <div className={"AddMovieComponantdiv"}>
                    <a onClick={() => { props.setIsOpen(false) ; props.fetchMovieData('');setmovieInp('') }} className={'closeButton'}>X</a>

                    <div className={'searchDiv'}>
                        <input
                            placeholder={'Enter Movie Name Here'}
                            style={{ backgroundColor: "inherit", padding: '2%', width: '100%', color: "white", borderRadius: "10px" }}
                            onChange={(e) => { setmovieInp(e.target.value) }}
                            value={movieInp}
                        />
                        <button  onClick={()=>{props.fetchMovieData(movieInp)}} className={movieInp==="" ? 'searchButton disableLink':"searchButton"}>Search</button>
                    </div>

                    <div className={'MovieSearchResultDiv'}>

                      {isEmpty(props.movie)  ? null :<MovieSearchResultComponent addMovieDataTomovieList={props.addMovieDataTomovieList} movie={props.movie} />}
                    </div>

                   

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

const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        fetchMovieData: (val)=> {
            if(val===''){
                dispatch(fetchMovieAction({}));
                return;
            }
            ownProps.setisLoading(true);
        axios.get(BACKEND_URL(val)).then(res=>{
            console.log(res.data);
            dispatch(fetchMovieAction(res.data));
            ownProps.setisLoading(false);
        })
        },
        addMovieDataTomovieList:(movieData)=>{
            dispatch(addToMovieList(movieData));
            triggerNotification("success","Movie Added");
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(AddMovieComponant); 
