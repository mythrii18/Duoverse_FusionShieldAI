import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const CustomBarTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;

    return (
      <div style={{
        background: "#0f172a",
        padding: "6px",
        borderRadius: "8px",
        fontSize: "12px"
      }}>
        <p>Activity: {val}</p>
      </div>
    );
  }
  return null;
};

export default function BarChartBox({ data }) {
  return (
    <ResponsiveContainer width="100%" height={90}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis hide />
        <Tooltip content={<CustomBarTooltip />} />
        <Bar dataKey="value" fill="#6366f1" radius={[6,6,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}