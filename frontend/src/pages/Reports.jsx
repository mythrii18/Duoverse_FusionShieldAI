import PieChartBox from "../components/charts/PieChartBox";

export default function Reports({ logs }) {

  const total = logs.length;

  const high = logs.filter(l => (l.fusion_result.score * 100) > 70).length;
  const warning = logs.filter(l => (l.fusion_result.score * 100) > 40 && (l.fusion_result.score * 100) <= 70).length;
  const safe = logs.filter(l => (l.fusion_result.score * 100) <= 40).length;

  return (
    <div className="p-8 space-y-8">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-purple-400">Threat Reports</h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">

        <div className="glass p-6 rounded-xl border-l-4 border-green-500">
          <p className="text-sm text-gray-400">Total Scans</p>
          <h2 className="text-2xl font-bold">{total}</h2>
        </div>

        <div className="glass p-6 rounded-xl border-l-4 border-red-500">
          <p className="text-sm text-gray-400">High Risk</p>
          <h2 className="text-2xl font-bold text-red-400">{high}</h2>
        </div>

        <div className="glass p-6 rounded-xl border-l-4 border-blue-500">
          <p className="text-sm text-gray-400">Safe</p>
          <h2 className="text-2xl font-bold text-blue-400">{safe}</h2>
        </div>

      </div>

      {/* DONUT + LEGEND */}
      <div className="glass p-6 rounded-xl grid grid-cols-2 items-center">

        <PieChartBox high={high} warning={warning} safe={safe} />

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            High Risk ({high})
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            Warning ({warning})
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            Safe ({safe})
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="glass p-6 rounded-xl">

        <h2 className="text-lg font-semibold mb-4 text-purple-400">
          Threat Activity Log
        </h2>

        {logs.length === 0 ? (
          <p className="text-gray-400">No data available</p>
        ) : (
          <div className="space-y-3">

            {logs.map((log, i) => {
              const score = Math.floor(log.fusion_result.score * 100);

              const level =
                score > 70 ? "Critical" :
                score > 40 ? "Warning" :
                "Safe";

              const color =
                score > 70 ? "bg-red-500/20 text-red-400" :
                score > 40 ? "bg-yellow-500/20 text-yellow-300" :
                "bg-green-500/20 text-green-400";

              return (
                <div
                  key={i}
                  className="flex justify-between items-center bg-[#0f172a] p-4 rounded-lg border border-gray-800"
                >

                  <div>
                    <p className="text-sm text-gray-400">
                      RPT-{String(i + 1).padStart(4, "0")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {log.voice_analysis ? "Multi-channel" : "Text only"}
                    </p>
                  </div>

                  <div className={`px-3 py-1 rounded ${color}`}>
                    {level}
                  </div>

                  <div className="w-40">
                    <div className="bg-gray-700 h-2 rounded">
                      <div
                        className="h-2 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{score}%</p>
                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </div>
  );
}