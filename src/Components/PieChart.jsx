import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data02 = [
  { name: "Absent", value: 30 },
  { name: "Present", value: 70 },
];

const COLORS = ["red", "green"];

const PieChartStat = () => {
  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie
          width={350}
          height={350}
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={90}
          //   fill="#82ca9d"
          label
        >
          {data02.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartStat;
