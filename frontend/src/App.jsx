import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [logs, setLogs] = useState([]);

  return (
    <div className="flex h-screen bg-[#0b1220] text-white overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 shrink-0 border-r border-gray-800 bg-[#0f172a]">
        <Sidebar setPage={setPage} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {page === "dashboard" ? (
            <Dashboard logs={logs} setLogs={setLogs} />
          ) : (
            <Logs logs={logs} />
          )}
        </main>

      </div>
    </div>
  );
}