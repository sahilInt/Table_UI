import React from 'react'
import "./GenderDoughnut.css"

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
)

const GenderDoughnut = () => {

    const options = {
        cutout:30,
        radius:"60%",
        
    }

    const data = {
        datasets: [{
            data: [68, 32],
            backgroundColor: [
                'yellow', 'blue'
            ]
        },

        ],

        labels: [
            'Male',
            'Female'
        ]
    };

    return (
        <div style={{height:"160px", width:"180px"}}>
            <Doughnut options={options} data={data} />

        </div>
    )
}

export default GenderDoughnut