import React from 'react'

function MovieComponent(props) {
    return (
        <div className={'MovieComponent'}>
             <a className = "x">X</a>
            
        
          <div className={'imgContainer'}>  <img className={'img'} src={props.movieData.Poster} /></div>
          <div style={{fontSize:"0.75em",padding:"0% 2%"}}>{props.movieData.Title}</div>
        </div>
    )
}

export default MovieComponent
