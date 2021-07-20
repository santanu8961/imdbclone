import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';    
import { connect } from 'react-redux';
import { triggerNotification } from '../util/consts';

function MovieSearchResultComponent(props) {
       const checkDuplicate = (movieList,movie)=>{
           let bool = false;
        movieList.forEach(element => {
            if(!bool){
                if(element.Title === movie.Title){
                    bool =  true;
                }
            }
        });

        if(bool){
            triggerNotification('error',"Movie already exists in the List");
        }  
        return bool;
    }
    if(props.movie.Response === 'False'){
        return (
            <div style={{position:"absolute",top:"50%",left:'50%',transform:"translate(-50%,-50%)"}}> {props.movie.Error}</div>
        )
    }else{
        return (
            <>
             
             <div className={'MovieSearchResultImgDiv'}>
             <img alt={props.movie.Title} className={'MovieSearchResultImg'} src={props.movie.Poster} />
             </div>
             <div className={'metaDataDiv'}>
                
                 <header>
                     <p style={{fontSize:"1.5em"}}>Title: <b>{props.movie.Title}</b></p>
                     <p style={{fontSize:"1.2em"}}>IMDB Rating: <b>{props.movie.imdbRating}</b></p>
                     <p >Language: {props.movie.Language}</p>
                     <p >Country: {props.movie.Country}</p>
                     <p >Type: {props.movie.Type}</p>
                     <p>Plot:<span style={{fontSize:"0.8em"}}>{props.movie.Plot}</span></p>
                 </header>
            <button className={props.movie.imdbRating =="N/A"?'AddmovieToListButton disable':'AddmovieToListButton'} disabled={props.movie.imdbRating =="N/A"} onClick={()=>{if(!checkDuplicate(props.movieList,props.movie))props.addMovieDataTomovieList(props.movie)}}>Add Movie To List</button>
             </div>  
             <div className={'RatingDiv'}>
                <p style={{fontSize:"1.5em",textAlign:'center'}}> Rating </p>
                <CircularProgressbar  styles={buildStyles({trailColor:"rgba(10, 0, 20, 40)", pathColor:'rgba(202, 49, 120, 0.6)'})} text={
                    props.movie.imdbRating =="N/A"?props.movie.imdbRating:(Math.floor(parseFloat(props.movie.imdbRating)*10)+"%")
                } value={
                    props.movie.imdbRating =="N/A"?0:(parseFloat(props.movie.imdbRating)*10)
                    } />
            </div>                
            </>
         )
    }
  
    }
    

    const mapStateToProps = state =>{
        return {
            movie:state.movie.movieData,
            movieList:state.movieList.movieList
        }

    }

export default connect(mapStateToProps,null)(MovieSearchResultComponent);