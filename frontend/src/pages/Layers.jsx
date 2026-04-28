export default function Layers({ result }) {

  if (!result) return <p>Run analysis first</p>;

  return (
    <div className="space-y-6">

      <h1 className="text-xl font-bold">AI Pipeline</h1>

      <Layer title="Text Intelligence" score={result?.text_analysis?.score} />
      <Layer title="Voice Intelligence" score={result?.voice_analysis?.score} />
      <Layer title="Fusion Engine" score={result?.fusion_result?.final_score} />
      <Layer title="Correlation Engine" score={result?.fusion_result?.correlation_detected ? 1 : 0} />

    </div>
  );
}

function Layer({ title, score }) {

  const percent = Math.floor((score || 0) * 100);

  return (
    <div className="bg-[#111827] p-5 rounded-2xl">

      <div className="flex justify-between">
        <p>{title}</p>
        <p>{percent}</p>
      </div>

      <div className="bg-gray-700 h-2 mt-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>

    </div>
  );
}