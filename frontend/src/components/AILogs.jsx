import { motion } from "framer-motion";

const messages = [
  "Initializing threat analysis...",
  "Scanning text patterns...",
  "Analyzing acoustic signals...",
  "Running fusion engine...",
  "Detecting cross-channel correlation...",
  "Finalizing threat score..."
];

export default function AILogs({ active }) {
  if (!active) return null;

  return (
    <div className="glass p-4 rounded-xl text-sm space-y-1 h-32 overflow-hidden">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.4 }}
          className="text-gray-300"
        >
          ⚙ {msg}
        </motion.div>
      ))}
    </div>
  );
}