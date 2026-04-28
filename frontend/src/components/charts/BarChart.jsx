import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function BarChartBox({ data }) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#aaa"/>
        <YAxis stroke="#aaa"/>
        <Tooltip/>
        <Bar dataKey="value" fill="#6366f1"/>
      </BarChart>
    </ResponsiveContainer>
  );
}