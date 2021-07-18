import React from 'react'

import { Bar } from 'react-chartjs-2';


function GraphComponent() {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 8, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        // pointHitRadius: 10
      },
    ],
  };

  const options = {
    onClick: (evt, elem) => {
      console.log(elem)
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

export default GraphComponent
