import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

/* CUSTOM TOOLTIP */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    let meaning = "";
    if (value < 30) meaning = "Low risk (safe)";
    else if (value < 70) meaning = "Moderate risk";
    else meaning = "High risk ⚠️";

    return (
      <div style={{
        background: "#0f172a",
        padding: "8px",
        borderRadius: "8px",
        fontSize: "12px",
        border: "1px solid #334155"
      }}>
        <p><strong>{label}</strong></p>
        <p>Score: {value}</p>
        <p>{meaning}</p>
      </div>
    );
  }
  return null;
};

export default function RiskChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={90}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#60a5fa"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}