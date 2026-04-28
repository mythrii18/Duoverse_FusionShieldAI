export default function Logs({ logs }) {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Audit Logs</h1>
        <p className="text-gray-400 text-sm">
          System activity and detected threats
        </p>
      </div>

      {/* LOG LIST */}
      <div className="bg-[#111827] rounded-2xl shadow-lg p-5">

        {logs.length === 0 ? (
          <p className="text-gray-400 text-sm">No logs yet</p>
        ) : (
          <div className="space-y-3">
            {logs.map((l, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-[#020617] border border-gray-800 rounded-lg px-4 py-3"
              >
                <span className="text-sm text-gray-300">
                  {l.message}
                </span>

                <span className="text-xs text-gray-500">
                  {l.time}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}