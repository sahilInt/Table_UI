import React from 'react'
import "./MaleDoughnut.css"

import { PieChart, Pie, Legend , Label,ResponsiveContainer} from "recharts";

const data = [
    { name: "Group D", value: 30, fill: "rgb(255,200,209)" },
    { name: "Group C", value: 70, fill: "rgb(211,68,91)" },
  ];
  
  const renderColorfulLegendText = (value) => {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };


const MaleDoughnut = () => {
  return (
    <ResponsiveContainer width={203} height={200} className="fem-dough-resp-container-main">
    <PieChart >
        
        <Pie
          data={data}
          cx={100}
          cy={130}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          align="center"
          stroke='none'
            cornerRadius={40}
        >,
        <Label value="Male" position="center" className='doug-inside'/>
            
         
        </Pie>
      </PieChart>
      </ResponsiveContainer>
  )
}

export default MaleDoughnut