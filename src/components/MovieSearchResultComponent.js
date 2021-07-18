import React from 'react'

function MovieSearchResultComponent(props) {
    console.log("props",props)
    return (
       <>
        <div className={'MovieSearchResultImgDiv'}>
                           <img className={'MovieSearchResultImg'} src={props.movie.Poster} />
                            </div>
       </>
    )
}

export default MovieSearchResultComponent
