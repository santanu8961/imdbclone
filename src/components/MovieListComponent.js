import React, { useRef } from 'react'
import MovieComponent from './MovieComponent'

function MovieListComponent() {

    const ref = useRef(0);
    return (
        <div className={"MovieListComponent"}>
            <button onClick={() => { ref.current.scrollLeft -= 100 }} style={{ left: "2.5vw", top: "7.5vh", position: "absolute" }} className={"addMovieButton"}>{"<"}</button>
            <div ref={ref} className={"MovieListArea"}>
                {[1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 4, 5].map(elem => <MovieComponent />)}
            </div>
            <button onClick={() => { ref.current.scrollLeft += 100 }} style={{ right: "2.5vw", position: "absolute", top: "7.5vh" }} className={"addMovieButton"}>{">"}</button>
        </div>
    )
}

export default MovieListComponent
