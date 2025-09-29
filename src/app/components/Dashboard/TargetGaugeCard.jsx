export default function TargetGaugeCard({
  progress = 75.55,
  target,
  revenue,
  today,
}) {
  const r = 70;
  const c = 2 * Math.PI * r;
  const offset = c - (progress / 100) * c;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Monthly Target</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Target you set for each month
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <svg width="170" height="120" viewBox="0 0 200 140">
          <g transform="translate(100,100)">
            <path
              d="M-90 0 A90 90 0 1 1 90 0"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M-90 0 A90 90 0 1 1 90 0"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${c / 2}, ${c}`}
              strokeDashoffset={offset / 2}
            />
          </g>
        </svg>

        <div>
          <div className="text-2xl font-semibold text-gray-900">
            {progress.toFixed(2)}%
          </div>
          <div className="text-xs text-emerald-600 mt-1">+10%</div>
          <p className="text-xs text-gray-500 mt-2">
            You earn $3287 today, it’s higher than last month. Keep up your good
            work!
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-gray-50 p-2">
          <div className="text-[11px] text-gray-500">Target</div>
          <div className="text-sm font-medium">{target}</div>
        </div>
        <div className="rounded-lg bg-gray-50 p-2">
          <div className="text-[11px] text-gray-500">Revenue</div>
          <div className="text-sm font-medium">{revenue}</div>
        </div>
        <div className="rounded-lg bg-gray-50 p-2">
          <div className="text-[11px] text-gray-500">Today</div>
          <div className="text-sm font-medium">{today}</div>
        </div>
      </div>
    </div>
  );
}
