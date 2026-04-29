import { useState } from "react";

export default function InputPanel({ setResult }) {

  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);

    try {
      const formData = new FormData();

      if (text) {
        formData.append("text", text);
      }

      if (audioFile) {
        formData.append("file", audioFile); // IMPORTANT: must be "file"
      }

      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (setResult) {
        setResult(data);
      }

    } catch (err) {
      console.error(err);
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (
    <div className="glass p-6 hover-card space-y-5 relative overflow-hidden">

      {loading && (
        <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
      )}

      <h2 className="text-lg font-semibold">Analyze Input</h2>

      {/* TEXT INPUT */}
      <textarea
        placeholder="Paste suspicious email, SMS..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 rounded-lg bg-slate-800 text-sm"
      />

      {/* AUDIO */}
      <label className="cursor-pointer">
        <input
          type="file"
          hidden
          onChange={(e) => setAudioFile(e.target.files[0])}
        />
        <div className="border border-dashed border-slate-600 rounded-lg p-4 text-center hover:border-blue-500">
          {audioFile ? audioFile.name : "Upload Audio"}
        </div>
      </label>

      {/* WAVEFORM */}
      {audioFile && (
        <div className="flex justify-center gap-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="animate-wave"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      )}

      <button
        onClick={run}
        className="btn-primary w-full py-3 rounded-lg"
      >
        {loading ? "Analyzing..." : "Run Analysis"}
      </button>

    </div>
  );
}