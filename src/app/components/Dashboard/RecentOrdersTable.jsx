export default function RecentOrdersCard({ className = "", orders }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Recent Orders</h3>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs">
            <svg viewBox="0 0 24 24" className="h-4 w-4">
              <path
                d="M3 6h18M5 12h14M8 18h10"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
              />
            </svg>
            Filter
          </button>
          <button className="text-xs text-gray-600">See all</button>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2 pr-3 font-medium">Products</th>
              <th className="py-2 pr-3 font-medium">Category</th>
              <th className="py-2 pr-3 font-medium">Price</th>
              <th className="py-2 pl-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(orders || defaultRows).map((r, i) => (
              <tr key={i}>
                <td className="py-3 pr-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar || "/images/products/image_1.png"}
                      alt=""
                      className="h-9 w-9 rounded-md object-cover bg-gray-100"
                    />
                    <div>
                      <div className="text-gray-900">
                        {r.product || r.customer}
                      </div>
                      <div className="text-xs text-gray-500">
                        {r.variant || r.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-3 text-gray-700">
                  {r.category || "Order"}
                </td>
                <td className="py-3 pr-3 text-gray-900">
                  {r.price || `$${r.total?.toFixed(2)}`}
                </td>
                <td className="py-3 pl-3">
                  <StatusPill value={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusPill({ value }) {
  const map = {
    Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Pending: "bg-amber-50 text-amber-700 ring-amber-200",
    "On hold": "bg-gray-100 text-gray-700 ring-gray-200",
  };
  const cls = map[value] || "bg-gray-100 text-gray-700 ring-gray-200";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ring-1 ${cls}`}
    >
      {value}
    </span>
  );
}
