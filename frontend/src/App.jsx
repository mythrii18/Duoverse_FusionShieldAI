import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import History from "./pages/History";
import Layers from "./pages/Layers";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [logs, setLogs] = useState([]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617]">

      {/* 🌐 CYBER GRID */}
      <div className="cyber-grid"></div>

      {/* 🔥 GLOW BLOBS */}
      <div className="absolute w-[300px] h-[300px] bg-purple-600 blur-[120px] opacity-20 top-10 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-500 blur-[120px] opacity-20 bottom-10 right-20"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex">

        <Sidebar setPage={setPage} />

        <div className="flex-1 overflow-y-auto">

          {page === "dashboard" && (
            <Dashboard logs={logs} setLogs={setLogs} />
          )}

          {page === "reports" && <Reports logs={logs} />}

          {page === "history" && <History logs={logs} />}

          {page === "pipeline" && <Layers logs={logs} />}

        </div>

      </div>
    </div>
  );
}