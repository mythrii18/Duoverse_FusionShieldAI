import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function BarChartBox({ text, voice, fusion }) {
  const data = [
    { name: "Text", value: text },
    { name: "Voice", value: voice },
    { name: "Fusion", value: fusion },
  ];

  return (
    <div className="glass p-4 rounded-xl">
      <h3 className="mb-3 text-purple-400">Channel Analysis</h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="value" fill="#7c3aed" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}