import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function ResultPanel({ data }) {

  if (!data) {
    return <div className="glass card">No analysis yet</div>;
  }

  const chartData = [
    { name: "Text", value: data.text },
    { name: "Email", value: data.email },
    { name: "Audio", value: data.audio }
  ];

  const pieData = [
    { name: "Safe", value: 40 },
    { name: "Medium", value: 30 },
    { name: "High", value: data.score }
  ];

  return (
    <div className="glass card">

      <h3>Analysis Result</h3>

      <h1 className="score">{data.score}</h1>
      <p className="risk">{data.score > 70 ? "High Risk" : "Moderate"}</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4f8cff" />
        </LineChart>
      </ResponsiveContainer>

      <PieChart width={250} height={200}>
        <Pie data={pieData} dataKey="value">
          <Cell fill="#22c55e" />
          <Cell fill="#facc15" />
          <Cell fill="#ef4444" />
        </Pie>
      </PieChart>

    </div>
  );
}