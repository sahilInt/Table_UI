import React from 'react'
import "./AgeDoughnut.css"

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
)

const AgeDoughnut = () => {

    const options = {
        cutout:30,
        radius:"60%",
        
    }

    const data = {
        datasets: [{
            data: [44.3, 55.7,0 ],
            backgroundColor: [
                'rgb(249,171,1)', 'rgb(26,115,232)','rgb(198,173,254)'
            ],
            borderWidth:0
        },

        ],

        labels: [
            'Desktop',
            'Mobile',
            'Tablet'
        ]
    };

  return (
    <div style={{height:"180px", width:"190px"}}>
    <Doughnut options={options} data={data} />

    </div>
  )
}

export default AgeDoughnut