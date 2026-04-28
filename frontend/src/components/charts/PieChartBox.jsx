import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

export default function PieChartBox({ data }) {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={30}
          outerRadius={50}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}