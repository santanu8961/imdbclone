import React, { useRef } from 'react'
import MovieComponent from './MovieComponent'
import { connect } from 'react-redux';

function MovieListComponent(props) {

    console.log('props.movieList',props.movieList)

    const ref = useRef(0);
    return (
        <div className={"MovieListComponent"}>
            <button onClick={() => { ref.current.scrollLeft -= 100 }} style={{ left: "2.5vw", top: "7.5vh", position: "absolute" }} className={"addMovieButton"}>{"<"}</button>
            <div ref={ref} className={"MovieListArea"}>
                {props.movieList.length == 0 ? <div className={"NoDataDiv"}>{"Nothing to Display"}</div>:props.movieList.map(elem => <MovieComponent movieData={elem} />)}
            </div>
            <button onClick={() => { ref.current.scrollLeft += 100 }} style={{ right: "2.5vw", position: "absolute", top: "7.5vh" }} className={"addMovieButton"}>{">"}</button>
        </div>
    )
}

const mapStateToprops = (state)=>{
    return{
      movieList:state.movieList.movieList
    }
  }
  
  
  
  const mapDispatchToprops = dispatch=>{
    return {
  
    }
  }


export default connect(mapStateToprops,mapDispatchToprops)(MovieListComponent)  
