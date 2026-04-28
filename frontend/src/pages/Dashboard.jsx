import { useState } from "react";
import GaugeChart from "../components/GaugeChart";
import Bar from "../components/Bar";

export default function Dashboard({ logs, setLogs }) {

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalysis = async () => {
    setLoading(true);

    const formData = new FormData();
    if (text) formData.append("text", text);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const result = await res.json();
      setData(result);

      setLogs([...logs, result]);

    } catch {
      alert("Backend not connected");
    }

    setLoading(false);
  };

  const risk = data?.fusion_result?.score || 0;
  const textScore = data?.text_analysis?.score || 0;
  const voiceScore = data?.voice_analysis?.score || 0;

  return (
    <div className="flex-1 p-8 space-y-6">

      {/* INPUT */}
      <div className="bg-[#111827] p-6 rounded-2xl">
        <textarea
          placeholder="Paste suspicious message..."
          className="w-full p-3 bg-black rounded"
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex mt-3 gap-3">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <button
            onClick={runAnalysis}
            className="ml-auto bg-purple-600 px-4 py-2 rounded"
          >
            {loading ? "Analyzing..." : "Run Analysis"}
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#111827] p-6 rounded-2xl text-center">
          <h1 className="text-5xl">{risk}</h1>
          <p>{data?.fusion_result?.level || "-"}</p>
          <GaugeChart value={risk} />
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl space-y-4">
          <Bar label="Text" value={textScore} color="bg-blue-500"/>
          <Bar label="Voice" value={voiceScore} color="bg-purple-500"/>
          <Bar label="Fusion" value={risk} color="bg-pink-500"/>
        </div>

      </div>

      {/* CORRELATION */}
      {data && (
        <div className="p-4 rounded bg-green-800 text-center">
          {data.fusion_result.correlation_detected
            ? "🚨 Correlation detected"
            : "✅ No correlation"}
        </div>
      )}

      {/* EXPLAIN */}
      {data?.text_analysis && (
        <div className="bg-[#111827] p-6 rounded-2xl">
          <h3>Why flagged?</h3>
          {data.text_analysis.reasons.map((r, i) => (
            <p key={i}>✔ {r}</p>
          ))}
        </div>
      )}

      {/* TIMELINE */}
      {data && (
        <div className="bg-[#111827] p-6 rounded-2xl">
          {data.timeline.map((t, i) => (
            <p key={i}>• {t}</p>
          ))}
        </div>
      )}

    </div>
  );
}