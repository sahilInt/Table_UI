import React, { PureComponent } from 'react'
import "./TreatmentSuccessRateDoughnut.css"
import { PieChart, Pie, Legend , Label,ResponsiveContainer} from "recharts";

const data = [
    { name: "Group D", value: 20, fill: "rgb(161,161,161)" },
    { name: "Group C", value: 80, fill: "rgb(188,192,45)" },
  ];
  
  const renderColorfulLegendText = (value) => {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };

const TreatmentSuccessRateDoughnut = () => {
  return (
    <ResponsiveContainer width={303} height={300} className="chart-resp-cont">
    <PieChart >
        
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          align="center"
        >,
        <Label value="80% Success" position="center"/>
            
         
        </Pie>
      </PieChart>
      </ResponsiveContainer>
  )
}

export default TreatmentSuccessRateDoughnut