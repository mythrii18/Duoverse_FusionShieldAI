import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts";

export default function GaugeChart({ value }) {
  const data = [{ name: "risk", value }];

  return (
    <div title={`Risk Score: ${value}`}>
      <ResponsiveContainer width={130} height={130}>
        <RadialBarChart innerRadius="70%" outerRadius="100%" data={data}>
          <RadialBar
            dataKey="value"
            fill="#9333ea"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}