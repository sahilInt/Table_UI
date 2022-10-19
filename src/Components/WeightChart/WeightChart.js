import React from 'react'
import "./WeightChart.css"

import { Line } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
)


const WeightChart = () => {

    const data1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (
        <div>
            <Line data={data1} />
        </div>
    )
}

export default WeightChart