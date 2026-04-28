export default function Topbar() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold tracking-wide">
        FusionShield AI Dashboard
      </h2>

      <div className="flex items-center gap-2 text-green-400 text-sm">
        <span className="animate-pulse">●</span> Live
      </div>
    </div>
  );
}