import React, { useState } from "react";

export default function ScanPanel({ onRun }) {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState(null);

  return (
    <div>
      <h3>Input</h3>

      <textarea
        placeholder="Paste suspicious message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="upload-row">

        <label className="upload-btn">
          📄 Email
          <input type="file" hidden />
        </label>

        <label className="upload-btn">
          🎤 Audio
          <input
            type="file"
            onChange={(e) => setAudio(e.target.files[0])}
            hidden
          />
        </label>

        <button className="run-btn" onClick={onRun}>
          Analyze
        </button>

      </div>

      {audio && (
        <p style={{ fontSize: "12px", marginTop: "8px" }}>
          🎤 {audio.name}
        </p>
      )}
    </div>
  );
}