export default function StatisticsCard() {
  // simple series for the sparkline (Jan..Dec)
  const series = [620, 610, 615, 630, 640, 655, 650, 660, 670, 690, 700, 735];

  // build path
  const max = Math.max(...series),
    min = Math.min(...series);
  const points = series
    .map((v, i) => {
      const x = (i / (series.length - 1)) * 1000;
      const y = 200 - ((v - min) / (max - min)) * 160; // padding top/btm
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Statistics</h3>
          <p className="text-xs text-gray-500">Target you set for each month</p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button className="px-3 py-1 rounded-md border border-gray-200">
            Overview
          </button>
          <button className="px-3 py-1 rounded-md text-gray-500">Sales</button>
          <button className="px-3 py-1 rounded-md text-gray-500">
            Revenue
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-200">
            05 Feb – 06 March
          </button>
        </div>
      </div>

      <div className="mt-3">
        <svg viewBox="0 0 1000 220" className="w-full h-56">
          <polyline
            points={points}
            fill="url(#fill)"
            stroke="#4f46e5"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-2 flex justify-between text-[11px] text-gray-500">
          {[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
