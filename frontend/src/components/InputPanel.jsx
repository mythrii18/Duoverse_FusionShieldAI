import { useState } from "react";

export default function InputPanel() {

  const [emailFile, setEmailFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const run = () => {
    setLoading(true);
    setTimeout(()=>setLoading(false), 2000);
  };

  return (
    <div className="glass p-6 hover-card space-y-5 relative overflow-hidden">

      {loading && (
        <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
      )}

      <h2 className="text-lg font-semibold">Analyze Input</h2>

      <textarea
        placeholder="Paste suspicious email, SMS..."
        className="w-full p-4 rounded-lg bg-slate-800 text-sm"
      />

      {/* EMAIL */}
      <label className="cursor-pointer">
        <input type="file" hidden onChange={(e)=>setEmailFile(e.target.files[0])}/>
        <div className="border border-dashed border-slate-600 rounded-lg p-4 text-center hover:border-blue-500">
          {emailFile ? emailFile.name : "Upload Email"}
        </div>
      </label>

      {/* AUDIO */}
      <label className="cursor-pointer">
        <input type="file" hidden onChange={(e)=>setAudioFile(e.target.files[0])}/>
        <div className="border border-dashed border-slate-600 rounded-lg p-4 text-center hover:border-blue-500">
          {audioFile ? audioFile.name : "Upload Audio"}
        </div>
      </label>

      {/* WAVEFORM */}
      {audioFile && (
        <div className="flex justify-center gap-1">
          {[...Array(20)].map((_,i)=>(
            <div key={i} className="animate-wave" style={{animationDelay:`${i*0.05}s`}}/>
          ))}
        </div>
      )}

      <button onClick={run} className="btn-primary w-full py-3 rounded-lg">
        {loading ? "Analyzing..." : "Run Analysis"}
      </button>

    </div>
  );
}