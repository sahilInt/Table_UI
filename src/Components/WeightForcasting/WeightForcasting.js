import React from 'react'

import { Line } from "react-chartjs-2";
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement,LineElement, Title,Tooltip, Legend } from 'chart.js'


ChartJs.register(
     Title, Tooltip, Legend
  )

const WeightForcasting = () => {

   const options = {
        scales: {
         x: {
           grid: {
             display: false
           }
         },
         y: {
           grid: {
             display: false
           }
         }
       }
     }

    const data = {
        labels: ["Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16"],
        datasets: [
          
          {
            label: "Actual Weight",
            data: [70, 75, 70,65],
            fill: false,
            borderColor: "rgb(185,213,255)"

          },
          {
            label: "Forecast Weight",
            data: [70, 65, 60,48, 40, 30],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgb(255,196,66)"

          },
        ],
       
      };
      

     
      

  return (
    <div class="chart-container" style={{position: "relative", height:"165px", width:"300px"}}>
    <Line data={data} options={options}/>
    </div>
  )
}

export default WeightForcasting