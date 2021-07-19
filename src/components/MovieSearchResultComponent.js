import React from 'react'

function MovieSearchResultComponent(props) {
    console.log("props",props)
    return (
       <>
        <div className={'MovieSearchResultImgDiv'}> 
                           <img className={'MovieSearchResultImg'} src={props.movie.Poster} />
                           <button onClick={()=>{props.addMovieDataTomovieList(props.movie)}}>Add Movie</button>
                            </div>
       </>
    )
}

export default MovieSearchResultComponent
