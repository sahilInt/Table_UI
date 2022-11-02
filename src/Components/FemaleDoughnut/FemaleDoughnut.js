import React from 'react'
import "./FemaleDoughnut.css"

import { PieChart, Pie, Legend , Label,ResponsiveContainer} from "recharts";

const data = [
    { name: "Group D", value: 50, fill: "rgb(245,220,148)" },
    { name: "Group C", value: 50, fill: "rgb(238,175,0)" },
  ];
  
  const renderColorfulLegendText = (value) => {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };


const FemaleDoughnut = () => {
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
        <Label value="Female" position="center" className='doug-inside'/>
            
         
        </Pie>
      </PieChart>
      </ResponsiveContainer>
  )
}

export default FemaleDoughnut