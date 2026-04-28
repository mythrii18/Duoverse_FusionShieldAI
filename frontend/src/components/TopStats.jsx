import React from 'react';
import { Mail, Zap, Target, TrendingUp } from 'lucide-react';

const TopStats = ({ stats }) => {
  const defaultStats = [
    { label: 'Total scans today', value: '11,284', subtext: 'Text + Voice + Fusion', icon: Mail, color: 'text-gray-400' },
    { label: 'Coordinated attacks', value: '3', subtext: 'Cross-channel confirmed', icon: Target, color: 'text-red-500', valueColor: 'text-red-500' },
    { label: 'Fusion boost active', value: '47', subtext: 'Correlation amplified', icon: Zap, color: 'text-purple-500', valueColor: 'text-purple-500' },
    { label: 'AI confidence avg', value: '96.3%', subtext: 'DistilBERT + Resemblyzer', icon: TrendingUp, color: 'text-green-500', valueColor: 'text-green-400' },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {displayStats.map((stat, idx) => (
        <div key={idx} className="bg-dark-800 rounded-xl p-4 border border-dark-700 shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider leading-tight">{stat.label}</h4>
          </div>
          <div className={`text-2xl font-bold mb-1 ${stat.valueColor || 'text-white'}`}>{stat.value}</div>
          <div className="text-[10px] text-gray-500 font-medium">{stat.subtext}</div>
        </div>
      ))}
    </div>
  );
};

export default TopStats;
