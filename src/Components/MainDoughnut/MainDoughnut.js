import React from 'react'
import "./MainDoughnut.css"

import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
// import {Pie} from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
)


const MainDoughnut = () => {

  const data = {
    datasets: [{
        data: [52.8, 16.9, 7.04,7.02,5.05,5.05,5.05],
        backgroundColor:[
          'yellow','Pink','Aqua','violet','blue','orange','green','black'
        ]
    },
    
  ],
  
    labels: [
        'Hungry Brain',
        'Emotional Hunger',
        'Hunger Gut',
        'Slow Burn',
        'Combo 1',
        'Combo 2',
        'Combo 3',
        'Combo 4',
        'Combo 5',
    ]
  };
  

  return (
    <div className='main-doughnut-flex-div'>
      <div className='main-doughnut-width-div' style={{width:'300px', height:'300px'}}>
        <Doughnut data={data}/>
      </div>
    </div>
  )
}

export default MainDoughnut