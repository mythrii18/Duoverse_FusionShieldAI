export default function Sidebar({ setPage }) {
  return (
    <div className="h-full flex flex-col px-5 py-6 text-gray-300">

      {/* LOGO */}
      <div className="mb-8">
        <h2 className="text-xl font-bold flex items-center gap-2 text-white">
          ⚡ FusionShield
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          AI Threat Intelligence
        </p>
      </div>

      {/* NAV */}
      <nav className="flex-1 space-y-6 text-sm">

        {/* SECTION */}
        <div>
          <p className="text-gray-500 uppercase text-xs mb-2">Overview</p>
          <div className="space-y-1">
            <button
              onClick={() => setPage("dashboard")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Dashboard
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Threats
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Analytics
            </button>
          </div>
        </div>

        {/* SECTION */}
        <div>
          <p className="text-gray-500 uppercase text-xs mb-2">AI Layers</p>
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Text Intelligence
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Voice Intelligence
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Fusion Engine
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Correlation Engine
            </button>
          </div>
        </div>

        {/* SECTION */}
        <div>
          <p className="text-gray-500 uppercase text-xs mb-2">Outputs</p>
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Explainability
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Attack Timeline
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Reports
            </button>
          </div>
        </div>

        {/* SECTION */}
        <div>
          <p className="text-gray-500 uppercase text-xs mb-2">System</p>
          <div className="space-y-1">
            <button
              onClick={() => setPage("logs")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Audit Logs
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              Settings
            </button>
          </div>
        </div>

      </nav>

      {/* FOOTER */}
      <div className="text-xs text-gray-500 pt-6 border-t border-gray-800">
        FusionShield v1.0
      </div>

    </div>
  );
}