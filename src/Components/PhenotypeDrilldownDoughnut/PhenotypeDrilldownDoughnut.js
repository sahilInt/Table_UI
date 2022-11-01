import React from 'react'
import "./PhenotypeDrilldownDoughnut.css"
import { PieChart, Pie, Legend, Label, ResponsiveContainer } from "recharts";

const data = [
    { name: "Hungry Brain", value: 45, fill: "rgb(244,180,0)" },
    { name: "Combo 1", value: 30, fill: "rgb(107,198,201)" },
    { name: "Emotional Hunger", value: 25, fill: "rgb(211,68,91)" },
];



const PhenotypeDrilldownDoughnut = () => {
    return (
        <ResponsiveContainer width={303} height={300} className="chart-resp-cont-in-pheno">
            <PieChart >

                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={40}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    align="center"
                    stroke='none'
                    className='pie-in-phno'
                >
                </Pie>
            <Legend/>

            </PieChart>
        </ResponsiveContainer>
    )
}

export default PhenotypeDrilldownDoughnut