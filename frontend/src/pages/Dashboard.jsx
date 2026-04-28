import React, { useState } from "react";
import RiskChart from "../components/charts/RiskChart";
import BarChartBox from "../components/charts/BarChartBox";
import PieChartBox from "../components/charts/PieChartBox";
import GaugeChart from "../components/charts/GaugeChart";

export default function Dashboard({ logs, setLogs }) {
  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [risk, setRisk] = useState(0);
  const [lastScan, setLastScan] = useState("--");
  const [result, setResult] = useState(null);

  const runAnalysis = async () => {
    try {
      const formData = new FormData();

      if (text) formData.append("text", text);
      if (audioFile) formData.append("file", audioFile);

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setResult(data);

      const score = Math.floor(data.fusion_result.final_score * 100);
      setRisk(score);

      setLastScan(new Date().toLocaleTimeString());

      setLogs(prev => [
        ...prev,
        {
          time: new Date().toLocaleTimeString(),
          message: `Threat detected: ${data.fusion_result.level}`
        }
      ]);

    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

  const lineData = [
    { name: "Text", score: result?.text_analysis?.score * 100 || 0 },
    { name: "Voice", score: result?.voice_analysis?.score * 100 || 0 },
    { name: "Fusion", score: risk }
  ];

  const barData = [
    { name: "Text", value: result?.text_analysis?.score * 100 || 0 },
    { name: "Voice", value: result?.voice_analysis?.score * 100 || 0 },
    { name: "Fusion", value: risk }
  ];

  const pieData = [
    { name: "Safe", value: risk < 40 ? 1 : 0 },
    { name: "Medium", value: risk >= 40 && risk < 70 ? 1 : 0 },
    { name: "High", value: risk >= 70 ? 1 : 0 }
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">⚡ FusionShield</h1>
          <p className="text-gray-400 text-sm">
            Multi-channel AI threat detection
          </p>
        </div>

        <div className="text-green-400 text-sm">
          ● Live | {lastScan}
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* INPUT */}
        <div className="bg-[#111827] p-5 rounded-2xl shadow-lg flex flex-col">
          <h3 className="text-lg font-semibold mb-3">Input</h3>

          <textarea
            className="bg-[#020617] border border-gray-700 rounded-lg p-3 text-sm mb-4 h-32 resize-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste suspicious message..."
          />

          <div className="flex justify-between items-center">
            <label className="bg-gray-700 px-3 py-2 rounded-lg cursor-pointer text-sm">
              🎤 Audio
              <input
                type="file"
                accept=".wav"
                hidden
                onChange={(e) => setAudioFile(e.target.files[0])}
              />
            </label>

            <button
              onClick={runAnalysis}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-sm"
            >
              Analyze
            </button>
          </div>

          {audioFile && (
            <p className="text-xs mt-2 text-gray-400">
              🎧 {audioFile.name}
            </p>
          )}
        </div>

        {/* PIPELINE */}
        <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">AI Pipeline</h3>

          <div className="space-y-3 text-sm">
            <div className="bg-[#1f2937] p-3 rounded-lg">🔍 Text Intelligence</div>
            <div className="bg-[#1f2937] p-3 rounded-lg">🎤 Voice Intelligence</div>
            <div className="bg-[#1f2937] p-3 rounded-lg">🧠 Fusion Engine</div>
            <div className="bg-[#1f2937] p-3 rounded-lg">🔗 Correlation Engine</div>
          </div>
        </div>

        {/* RISK + CHARTS */}
        <div className="bg-[#111827] p-5 rounded-2xl shadow-lg space-y-4">

          <div className="text-center">
            <h1
              className={`text-4xl font-bold ${
                risk < 40
                  ? "text-green-400"
                  : risk < 70
                  ? "text-yellow-400"
                  : "text-red-500"
              }`}
            >
              {risk}
            </h1>
            <p className="text-gray-400 text-sm">Risk Score</p>
          </div>

          <GaugeChart value={risk} />
          <RiskChart data={lineData} />
          <BarChartBox data={barData} />
          <PieChartBox data={pieData} />
        </div>

      </div>

      {/* RESULT */}
      {result && (
        <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-3">Analysis Result</h3>

          <p>
            <b>Threat Level:</b>{" "}
            <span className="text-blue-400">
              {result.fusion_result.level}
            </span>
          </p>

          <p><b>Confidence:</b> {result.fusion_result.confidence}</p>
          <p><b>Attack Type:</b> {result.text_analysis?.attack_type}</p>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-300">
            {result.text_analysis?.reason
              ?.split(";")
              .map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}

      {/* TIMELINE */}
      <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Attack Timeline</h3>

        {result ? (
          <ul className="list-disc pl-5 text-sm text-gray-300">
            {result.timeline.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm">
            Email → Voice → Fusion → Correlation → Alert
          </p>
        )}
      </div>

    </div>
  );
}