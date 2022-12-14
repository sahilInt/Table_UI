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
                'rgb(249,171,1)', 'rgb(26,115,232)'
            ],
            borderWidth:0
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