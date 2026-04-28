export default function Reports({ logs }) {

  const high = logs.filter(l => l.fusion_result.score > 60).length;
  const safe = logs.length - high;

  return (
    <div className="flex-1 p-8">

      <h1 className="text-2xl mb-6">Reports</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#111827] p-6 rounded-2xl">Total: {logs.length}</div>
        <div className="bg-[#111827] p-6 rounded-2xl">High: {high}</div>
        <div className="bg-[#111827] p-6 rounded-2xl">Safe: {safe}</div>
      </div>

    </div>
  );
}