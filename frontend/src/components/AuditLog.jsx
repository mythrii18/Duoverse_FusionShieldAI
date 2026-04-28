import React from 'react';

const AuditLog = ({ logs }) => {
  const defaultLogs = [
    { time: '09:38:52', source: 'Fusion', message: 'Coordinated banking scam — Email + SMS + Voice cross-channel confirmed', color: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/30' },
    { time: '09:38:47', source: 'Voice', message: 'Synthetic speech anomaly — Resemblyzer embedding score 0.83', color: 'text-yellow-400', bg: 'bg-yellow-900/20', border: 'border-yellow-500/30' },
    { time: '09:34:22', source: 'Email', message: 'Phishing URL detected — secure-bankauth.xyz, financial intent flagged', color: 'text-blue-400', bg: 'bg-blue-900/20', border: 'border-blue-500/30' },
    { time: '09:31:04', source: 'SMS', message: 'OTP urgency scam — "Your bank account suspended, verify now"', color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
  ];

  const displayLogs = logs || defaultLogs;

  return (
    <div className="bg-dark-800 rounded-xl border border-dark-700 shadow-xl overflow-hidden mt-6">
      <div className="bg-dark-900/50 px-6 py-3 border-b border-dark-700 flex justify-between items-center">
        <h3 className="font-bold text-gray-300 text-sm">Live audit log</h3>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold text-gray-500 uppercase">Live</span>
        </div>
      </div>
      <div className="p-2 max-h-60 overflow-y-auto">
        {displayLogs.map((log, idx) => (
          <div key={idx} className="flex items-center gap-4 px-4 py-2 hover:bg-dark-700/50 rounded-lg transition-colors group">
            <span className="text-[10px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors shrink-0">{log.time}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase shrink-0 min-w-[60px] text-center ${log.bg} ${log.color} ${log.border}`}>
              {log.source}
            </span>
            <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors truncate">
              {log.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditLog;
