import React from 'react'
import { connect } from 'react-redux'
import { removefromMovieList } from '../redux/movieList/movieListAction'
import { triggerNotification } from '../util/consts'

function MovieComponent(props) {
    return (
        <div className={'MovieComponent'}>
             <a onClick={()=>{props.removeFrommovieListFunc(props.index)}} className = "x">X</a>
            
        
          <div className={'imgContainer'}>  <img className={'img'} src={props.movieData.Poster} /></div>
          <div style={{fontSize:"0.75em",padding:"0% 2%"}}>{props.movieData.Title}</div>
        </div>
    )
}


const mapdispatchToprops = (dispatch)=>{
        return{
            removeFrommovieListFunc:(i)=>{
                if(window.confirm('Are you Sure?')){
                    dispatch(removefromMovieList(i));
                triggerNotification('success','Movie Deleted SuccessFully')
                }
                
            }
        }
}




export default connect(null,mapdispatchToprops)(MovieComponent); 
