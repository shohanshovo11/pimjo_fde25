export default function StatCard({
  title,
  value,
  delta,
  deltaTone = "positive",
  icon,
}) {
  const tone =
    deltaTone === "positive"
      ? "text-emerald-600 bg-emerald-50"
      : "text-rose-600 bg-rose-50";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
          <span
            className={`mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${tone}`}
          >
            {delta}
          </span>
        </div>
        <div className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
          {icon === "users" && (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )}
          {icon === "package" && (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
              <path d="M3.3 7.3L12 12l8.7-4.7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
