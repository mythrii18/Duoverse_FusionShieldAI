import { motion } from "framer-motion";

export default function ScannerEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40"
      />
    </div>
  );
}