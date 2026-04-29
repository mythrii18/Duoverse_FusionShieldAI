import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function FusionChart({ text, voice, fusion }) {

  // 👉 stronger difference for demo
  const before = Math.max(text, voice); // makes contrast obvious

  const data = [
    { stage: "Before Fusion", value: before },
    { stage: "After Fusion", value: fusion }
  ];

  return (
    <div className="glass p-4 rounded-xl">
      <h3 className="mb-3 text-purple-400">Fusion Impact</h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />

          <XAxis dataKey="stage" stroke="#aaa" />

          <Tooltip
            contentStyle={{
              background: "#020617",
              border: "1px solid #7c3aed"
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#ec4899"
            strokeWidth={4}
            dot={{ r: 7 }}
            activeDot={{ r: 9 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}