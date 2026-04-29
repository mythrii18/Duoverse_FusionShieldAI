import { motion } from "framer-motion";

export default function History({ logs }) {
  return (
    <div className="flex-1 p-8">

      <h1 className="text-2xl font-bold mb-6 text-purple-400">
        Analysis History
      </h1>

      {logs.length === 0 ? (
        <p className="text-gray-400">No history yet</p>
      ) : (

        <div className="space-y-4">

          {logs.map((l, i) => {

            const score = Math.floor((l.fusion_result.score || 0) * 100);

            const color =
              score > 70
                ? "text-red-400 bg-red-500/10 border-red-500"
                : score > 40
                ? "text-yellow-300 bg-yellow-500/10 border-yellow-500"
                : "text-green-400 bg-green-500/10 border-green-500";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`glass p-4 rounded-xl flex justify-between items-center border ${color} hover-card`}
              >

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">

                  {/* STATUS DOT */}
                  <div className={`w-3 h-3 rounded-full
                    ${
                      score > 70
                        ? "bg-red-400"
                        : score > 40
                        ? "bg-yellow-400"
                        : "bg-green-400"
                    }`}
                  />

                  {/* DETAILS */}
                  <div>
                    <p className="font-semibold">
                      Threat Score: {score}
                    </p>
                    <p className="text-xs text-gray-400">
                      {l.fusion_result.level}
                    </p>
                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">
                  <p className="text-sm text-gray-400">{l.time}</p>

                  {l.fusion_result.correlation_detected && (
                    <p className="text-xs text-red-400 mt-1">
                      ⚠ Correlated Attack
                    </p>
                  )}
                </div>

              </motion.div>
            );
          })}

        </div>
      )}

    </div>
  );
}