import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function FusionChart({ data }) {

  const defaultData = [
    { name: "Email", value: 60 },
    { name: "SMS", value: 50 },
    { name: "Voice", value: 55 },
    { name: "Fusion", value: 90 },
  ];

  const chartData = data || defaultData;

  return (
    <div className="bg-[#0f172a] p-5 rounded-xl border border-slate-700">
      <h3 className="text-sm mb-3">Fusion Score Graph</h3>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}