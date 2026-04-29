import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function PieChartBox({ high, warning, safe }) {

  // ✅ prevent empty chart crash
  const total = high + warning + safe;

  const data = total === 0
    ? [{ name: "No Data", value: 1 }]
    : [
        { name: "High", value: high },
        { name: "Warning", value: warning },
        { name: "Safe", value: safe }
      ];

  const COLORS = total === 0
    ? ["#6b7280"]
    : ["#ef4444", "#facc15", "#22c55e"];

  return (
    <div className="w-full h-[250px]">

      <ResponsiveContainer>
        <PieChart>

          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            paddingAngle={5}
            label={total !== 0}   // show labels only when data exists
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          {/* 🔥 Better tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #7c3aed",
              borderRadius: "8px",
              color: "#fff"
            }}
          />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}