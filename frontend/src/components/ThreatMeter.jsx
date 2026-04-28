export default function ThreatMeter({ score }) {
  return (
    <div className="w-full h-3 bg-slate-700 rounded overflow-hidden">
      <div
        className="h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-700"
        style={{ width: `${score}%` }}
      />
    </div>
  );
}