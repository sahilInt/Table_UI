import React from 'react'
import "./LineChart.css"

import { Line } from "react-chartjs-2";
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement,LineElement, Title,Tooltip, Legend } from 'chart.js'


ChartJs.register(
    CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend
  )

const LineChart = () => {

    const data = {
        labels: ["Jan 1", "Jan 4", "Jan 7", "Jan 10", "Jan 13", "Jan 16","Jan 19","Jan 22","Jan 25"],
        datasets: [
          {
            label: "First dataset",
            data: [110, 170, 200,380, 200, 250,160, 240, 100],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgb(185,213,255)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76, 80, 30, 10],
            fill: false,
            borderColor: "rgb(255,196,66)"
          }
        ]
      };
      

  return (
    <div class="chart-container" style={{position: "relative", height:"450px", width:"400px"}}>
    <Line data={data} />
    </div>
  )
}

export default LineChart