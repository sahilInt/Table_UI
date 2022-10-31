import React from 'react'
// import "./AvgPatientGraph.css"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    // CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Jan",
        pv: 125,
    },
    {
        name: "Feb",
        pv: 155,
    },
    {
        name: "Mar",
        pv: 190,
    },
    {
        name: "Apr",
        pv: 80,
    },
    {
        name: "May",
        pv: 125,
    },
    {
        name: "Jun",
        pv: 180,
    },
    {
        name: "Jul",
        pv: 130,
    },
    {
        name: "Aug",
        pv: 140,
    },
    {
        name: "Sept",
        pv: 100,
    },
    {
        name: "Oct",
        pv: 200,
        fill:"rgb(33,186,255)",
    },
    {
        name: "Nov",
        // pv: 190,
    },
    {
        name: "Dec",
        // pv: 160,
    }
];

const AvgPatientGraph = () => {
    return (
        <ResponsiveContainer  width={545} height={250} margin-left={-27}>
            <BarChart
                // width={590}
                // height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pv" fill="rgb(133,217,255)"  />

            </BarChart>
        </ResponsiveContainer>
    )
}

export default AvgPatientGraph