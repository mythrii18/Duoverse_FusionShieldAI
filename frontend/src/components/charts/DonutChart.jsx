import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function DonutChart() {
  const data = [
    { name: "Safe", value: 70 },
    { name: "Medium", value: 20 },
    { name: "High", value: 10 },
  ];

  const COLORS = ["#22c55e", "#eab308", "#ef4444"];

  return (
    <ResponsiveContainer width="100%" height={90}>
      <PieChart>
        <Pie data={data} dataKey="value" innerRadius={30} outerRadius={40}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}