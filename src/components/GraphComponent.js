import React from 'react'

import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { removefromMovieList } from '../redux/movieList/movieListAction';
import { triggerNotification } from '../util/consts';


function GraphComponent(props) {

  console.log('Graphprops',props);

  const lebels = ()=>{
    let l = []
    props.movieList.forEach(element => {
      l.push(element.Title);
    });
    return l;
  }

  const rating = ()=>{
    let d = [];
    props.movieList.forEach(element => {
      d.push(element.imdbRating);
    });
    return d;

  }

  const data = {
    labels: lebels(),
    datasets: [
      {
        label: 'IMDB Rating',
        data:rating(),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        // pointHitRadius: 10
      },
    ],
  };

  const options = {
    onClick: (evt, elem) => {
    
     if(elem.length) {if(window.confirm("Are you Sure?")) props.removeFrommovieListFunc(elem[0].index)}
      
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1
          },
        },
      ],
    },
  };
  return (
    <div className={"GraphComponent"}>
      <Bar height={35} width={75} data={data} options={options} />
    </div>
  )
}

const mapStateToprops = (state)=>{
  return{
    movieList:state.movieList.movieList
  }
}

const mapdispatchToprops = (dispatch)=>{
  return{
      removeFrommovieListFunc:(i)=>{
          dispatch(removefromMovieList(i));
          triggerNotification('success','Movie Deleted SuccessFully')
      }
  }
}


export default connect(mapStateToprops,mapdispatchToprops)(GraphComponent) 
