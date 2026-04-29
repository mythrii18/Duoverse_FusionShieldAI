import { motion } from "framer-motion";

export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 h-screen bg-[#020617] p-6 border-r border-gray-800">

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold mb-10 whitespace-nowrap
        bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        ⚡ FusionShield AI
      </motion.h2>

      <div className="space-y-5 text-gray-300">

        <Nav label="Dashboard" onClick={() => setPage("dashboard")} />
        <Nav label="AI Pipeline" onClick={() => setPage("pipeline")} />
        <Nav label="History" onClick={() => setPage("history")} />
        <Nav label="Reports" onClick={() => setPage("reports")} />

      </div>
    </div>
  );
}

function Nav({ label, onClick }) {
  return (
    <motion.p
      whileHover={{ scale: 1.05, x: 5 }}
      onClick={onClick}
      className="cursor-pointer hover:text-white"
    >
      {label}
    </motion.p>
  );
}