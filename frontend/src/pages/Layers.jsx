import { motion } from "framer-motion";

export default function Layers({ logs }) {

  const last = logs[logs.length - 1];
  if (!last) return <p className="p-8 text-gray-400">Run analysis first</p>;

  const steps = [
    { name: "Text Intelligence", value: last?.text_analysis?.score },
    { name: "Voice Intelligence", value: last?.voice_analysis?.score },
    { name: "Fusion Engine", value: last?.fusion_result?.score },
    { name: "Correlation Engine", value: last?.fusion_result?.correlation_detected ? 1 : 0 }
  ];

  return (
    <div className="p-8">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-8 text-purple-400">
        AI Pipeline Flow
      </h1>

      {/* PIPELINE */}
      <div className="flex flex-col items-center space-y-10">

        {steps.map((step, i) => {

          const percent = Math.floor((step.value || 0) * 100);

          return (
            <div key={i} className="flex flex-col items-center">

              {/* NODE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="relative glass p-6 rounded-2xl w-72 text-center hover-card overflow-hidden"
              >

                {/* glow background */}
                <div className="absolute w-32 h-32 bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>

                <div className="relative z-10">

                  <h3 className="mb-2 font-semibold">
                    {step.name}
                  </h3>

                  <p className="text-2xl font-bold text-purple-400">
                    {percent}%
                  </p>

                  {/* progress bar */}
                  <div className="mt-3 bg-gray-700 h-2 rounded">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 1 }}
                      className="h-2 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>

                </div>
              </motion.div>

              {/* CONNECTOR */}
              {i !== steps.length - 1 && (
                <div className="flex flex-col items-center my-2">

                  {/* animated flow line */}
                  <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 animate-pulse"></div>

                  {/* moving dot */}
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-3 h-3 bg-pink-500 rounded-full shadow-lg"
                  />

                </div>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}