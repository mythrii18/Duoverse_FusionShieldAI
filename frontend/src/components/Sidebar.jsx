export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 h-screen bg-[#020617] p-5">
      <h2 className="text-xl font-bold mb-6">⚡ FusionShield</h2>

      <div className="space-y-4 text-gray-300">

        <p className="cursor-pointer hover:text-white" onClick={() => setPage("dashboard")}>
          Dashboard
        </p>

        <p className="cursor-pointer hover:text-white" onClick={() => setPage("history")}>
          Analysis History
        </p>

        <p className="cursor-pointer hover:text-white" onClick={() => setPage("reports")}>
          Reports
        </p>

      </div>
    </div>
  );
}