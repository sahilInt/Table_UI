import React from 'react'
import "./HorizontalAgeGraph"

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const HorizontalAgeGraph = () => {

    const options = {
        indexAxis: 'y',
        
    }

    const dataHorBar = {
        labels: ["18-24", "25-34", "35-44",  " 44-54", "55-64", "65 +",],
        datasets: [
            {
                label: "",
                backgroundColor: "rgb(26,115,232)",
                // borderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [30,40, 25, 20,15 ,10 ]
            }
        ]
    };

  return (
    <div>
    <Bar options={options} data={dataHorBar} />
    </div>
  )
}

export default HorizontalAgeGraph