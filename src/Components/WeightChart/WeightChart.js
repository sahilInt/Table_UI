import React from 'react'
import "./WeightChart.css"

import { Line } from "react-chartjs-2";
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement,LineElement, Title,Tooltip, Legend } from 'chart.js'


ChartJs.register(
    CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend
  )

const WeightChart = () => {

    const data = {
        labels: ["Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16","Jan 19","Jan 22","Jan 25"],
        datasets: [
          {
            label: "First dataset",
            data: [110, 170, 200,380, 200, 250,160, 240, 100],
            // fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgb(34,91,96)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76, 80, 30, 10],
            fill: false,
            borderColor: "rgb(79,168,165)"
          }
        ]
      };
      

  return (
    <div class="chart-container" style={{position: "relative", height:"160px", width:"300px"}}>
    <Line data={data} />
    </div>
  )
}

export default WeightChart