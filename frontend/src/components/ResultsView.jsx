import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Clock, ShieldAlert, Activity } from 'lucide-react';

const ResultsView = ({ result, timeline }) => {
  const chartData = [
    { name: 'Email', score: 87 },
    { name: 'SMS', score: 74 },
    { name: 'Voice', score: 79 },
    { name: 'Fused', score: 91, fused: true },
  ];

  if (!result) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Fusion Graph */}
      <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-200">Fusion score graph</h3>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Before vs after boost</span>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{fill: '#6b7280', fontSize: 12}}
              />
              <Tooltip
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                contentStyle={{backgroundColor: '#1e1e1e', borderColor: '#3d3d3d', borderRadius: '8px'}}
              />
              <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fused ? '#8b5cf6' : '#3b82f6'} fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-[11px] text-gray-500 leading-relaxed">
          Correlation boost amplified weak individual signals into strong combined threat.
        </p>
      </div>

      {/* Correlation matches */}
      <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-200">Correlation engine</h3>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Cross-channel matches</span>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-red-900/10 border border-red-900/30">
            <h4 className="text-red-500 font-bold text-sm mb-2">Coordinated banking scam detected</h4>
            <p className="text-[11px] text-gray-400 mb-4">Matching banking + OTP intent across Email, SMS and Voice within 8-minute window</p>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold text-blue-400">Email</span>
              <span className="text-[10px] font-bold text-green-400">SMS</span>
              <span className="text-[10px] font-bold text-yellow-400">Voice</span>
            </div>
            <div className="mt-3 h-1 w-full bg-dark-900 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[94%]" />
            </div>
            <div className="mt-1 flex justify-between">
              <span className="text-[10px] text-gray-500 font-bold uppercase">Intent overlap</span>
              <span className="text-[10px] text-red-500 font-bold">94%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-700">
            <h4 className="text-gray-300 font-bold text-sm mb-2">Urgency pattern — SMS + Email</h4>
            <p className="text-[11px] text-gray-500">Similar urgency language detected in two channels from same origin cluster</p>
          </div>
        </div>
      </div>

      {/* Attack Timeline */}
      <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-200">Attack timeline</h3>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Current incident</span>
        </div>

        <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-dark-700">
          {timeline?.map((event, idx) => (
            <div key={idx} className="pl-8 relative">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-purple-500 z-10" />
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-gray-600">09:31:0{idx}</span>
                <span className="text-[10px] font-bold text-blue-400 uppercase">Analysis</span>
              </div>
              <h5 className="text-[12px] font-bold text-gray-300">{event}</h5>
            </div>
          ))}
          {!timeline && (
            <div className="text-[11px] text-gray-500 text-center py-10">No incident data yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
