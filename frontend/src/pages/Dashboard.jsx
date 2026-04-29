import { useState } from "react";
import { motion } from "framer-motion";
import GaugeChart from "../components/charts/GaugeChart";
import Bar from "../components/Bar";
import ScannerEffect from "../components/ScannerEffect";
import AudioWave from "../components/AudioWave";
import AILogs from "../components/AILogs";
import BarChartBox from "../components/charts/BarChartBox";
import FusionChart from "../components/charts/FusionChart";

export default function Dashboard({ logs, setLogs }) {

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalysis = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      if (text) formData.append("text", text);
      if (file) formData.append("file", file);

      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      setData(result);

      setLogs(prev => [...prev, { ...result, time: new Date().toLocaleTimeString() }]);

    } catch {
      alert("Backend error");
    }

    setLoading(false);
  };

  const risk = Math.floor((data?.fusion_result?.score || 0) * 100);

  return (
    <div className="flex-1 p-8 space-y-6">

      {/* SYSTEM STATUS */}
      <div className="glass p-4 rounded-xl flex justify-between text-sm">
        <span className="text-green-400">🟢 System Active</span>
        <span>Threat Engine Running</span>
        <span>Live Analysis</span>
      </div>

      {/* INPUT */}
      <div className="relative glass p-6 rounded-2xl">
        <ScannerEffect />

        <textarea
          placeholder="Paste suspicious message..."
          className="w-full p-3 bg-black rounded text-white"
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex mt-3 gap-3">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <button onClick={runAnalysis} className="ml-auto btn-primary px-4 py-2 rounded">
            {loading ? "Analyzing..." : "Run Analysis"}
          </button>
        </div>
      </div>

      {/* AUDIO VISUAL */}
      {file && (
        <div className="glass p-4 rounded-xl text-center">
          <p className="text-sm text-gray-400 mb-2">Audio Signal</p>
          <AudioWave active={loading || data} />
        </div>
      )}

      {/* AI LOGS */}
      <AILogs active={loading} />

      {/* RESULTS */}
      {data && (
        <>
          {/* MAIN RESULT */}
          <div className="grid grid-cols-2 gap-6">

            <motion.div className="glass p-6 rounded-2xl text-center relative overflow-hidden glow">

              <div className="absolute w-40 h-40 bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>

              <div className="relative z-10">
                <h1 className="text-6xl font-bold text-purple-400">
                  {risk}
                </h1>

                <p className={`mt-2 px-4 py-1 rounded-full inline-block
                  ${risk > 70 ? "bg-red-500/20 text-red-400" :
                    risk > 40 ? "bg-yellow-500/20 text-yellow-300" :
                    "bg-green-500/20 text-green-400"}
                `}>
                  {data?.fusion_result?.level}
                </p>

                <GaugeChart value={risk} />
              </div>
            </motion.div>

            <div className="glass p-6 rounded-2xl space-y-4">
              <Bar label="Text" value={(data?.text_analysis?.score || 0) * 100} color="bg-blue-500"/>
              <Bar label="Voice" value={(data?.voice_analysis?.score || 0) * 100} color="bg-purple-500"/>
              <Bar label="Fusion" value={risk} color="bg-pink-500"/>
            </div>

          </div>

          {/* ALERT */}
          <div className={`p-4 rounded text-center font-semibold
            ${risk > 70 ? "bg-red-500/20 text-red-400" :
              risk > 40 ? "bg-yellow-500/20 text-yellow-300" :
              "bg-green-500/20 text-green-400"}
          `}>
            {risk > 70 ? "🚨 High Threat Detected"
              : risk > 40 ? "⚠️ Suspicious Activity"
              : "✅ Safe Input"}

            {data.fusion_result.correlation_detected && (
              <div className="mt-2 text-pink-400">
                🔗 Cross-channel correlation detected
              </div>
            )}
          </div>

          {/* CHARTS */}
          <div className="grid grid-cols-2 gap-6">

            <BarChartBox
              text={(data?.text_analysis?.score || 0) * 100}
              voice={(data?.voice_analysis?.score || 0) * 100}
              fusion={risk}
            />

            <FusionChart
              text={(data?.text_analysis?.score || 0) * 100}
              voice={(data?.voice_analysis?.score || 0) * 100}
              fusion={risk}
            />

          </div>

          {/* THREAT SIGNALS */}
          {data?.text_analysis?.reasons && (
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-purple-400 mb-3">Threat Signals</h3>

              {/* TEXT REASONS */}
              {data.text_analysis.reasons.map((r, i) => (
                <div key={i} className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  {r}
                </div>
              ))}

              {/* 🔥 VOICE EXPLANATION (NEW) */}
              {data?.voice_analysis && (
                <div className="mt-3">
                  <p className="text-purple-400 text-sm">Voice Analysis</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Unusual speech pattern detected (energy / variability anomaly)
                  </div>
                </div>
              )}

            </div>
          )}

        </>
      )}

    </div>
  );
}