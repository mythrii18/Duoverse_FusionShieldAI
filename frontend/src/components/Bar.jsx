export default function Bar({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="bg-gray-700 h-2 rounded mt-1">
        <div className={`${color} h-2 rounded`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}