export default function History({ logs }) {
  return (
    <div className="flex-1 p-8">

      <h1 className="text-2xl mb-4">Analysis History</h1>

      {logs.map((l, i) => (
        <div key={i} className="bg-[#111827] p-3 mb-2 rounded">
          Score: {l.fusion_result.score}
        </div>
      ))}

    </div>
  );
}