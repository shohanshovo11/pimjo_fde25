export default function MonthlySalesCard({ className = "" }) {
  const bars = [120, 180, 110, 420, 260, 230, 210, 260, 240, 280, 240, 260];

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Monthly Sales</h3>
        <span className="text-xs text-gray-500">This year</span>
      </div>

      <div className="mt-4 h-56 flex">
        {/* Y-axis labels */}
        <div className="w-12 pr-2 flex flex-col">
          <div className="h-48 flex flex-col justify-between">
            <span className="text-[10px] text-gray-500 leading-none">$500</span>
            <span className="text-[10px] text-gray-500 leading-none">$400</span>
            <span className="text-[10px] text-gray-500 leading-none">$200</span>
            <span className="text-[10px] text-gray-500 leading-none">$0</span>
          </div>
          <div className="h-8"></div> {/* Space for month labels */}
        </div>

        {/* Chart area */}
        <div className="flex-1 flex flex-col">
          {/* Chart with bars and grid lines */}
          <div className="h-48 relative">
            {/* Grid lines - pushed to background */}
            <div className="absolute inset-0 flex flex-col justify-between z-0">
              <div className="border-b border-gray-300/50"></div>
              <div className="border-b border-gray-300/50"></div>
              <div className="border-b border-gray-300/50"></div>
              <div className="border-b border-gray-400/60"></div>
            </div>

            {/* Bars - in front of grid lines */}
            <div className="relative z-10 grid grid-cols-12 items-end gap-1 h-full px-1">
              {bars.map((v, i) => (
                <div key={i} className="flex justify-center items-end h-full">
                  <div
                    className={`w-4 rounded-t-lg bg-indigo-500/70 ${
                      i === 3 ? "bg-indigo-600" : ""
                    }`}
                    style={{ height: `${(v / 500) * 180}px` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Month labels */}
          <div className="h-8 grid grid-cols-12 gap-1 items-center px-1">
            {bars.map((v, i) => (
              <div key={i} className="flex justify-center">
                <span className="text-[10px] text-gray-500">
                  {
                    [
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
                    ][i]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
