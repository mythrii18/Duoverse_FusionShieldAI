import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function FusionChart({ before, after }) {
  const data = [
    { name: "Before", value: before },
    { name: "After", value: after },
  ];

  return (
    <BarChart width={300} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" />
    </BarChart>
  );
}