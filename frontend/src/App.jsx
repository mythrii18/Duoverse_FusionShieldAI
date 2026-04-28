import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import History from "./pages/History";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [logs, setLogs] = useState([]);

  return (
    <div className="flex">
      <Sidebar setPage={setPage} />

      {page === "dashboard" && <Dashboard logs={logs} setLogs={setLogs} />}
      {page === "reports" && <Reports logs={logs} />}
      {page === "history" && <History logs={logs} />}
    </div>
  );
}