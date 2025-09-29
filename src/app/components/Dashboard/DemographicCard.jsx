export default function DemographicCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">
          Customers Demographic
        </h3>
        <span className="text-xs text-gray-500">by country</span>
      </div>

      <div className="mt-3 rounded-lg bg-gray-50 h-48 relative overflow-hidden">
        {/* quick fake map pins */}
        <span className="absolute left-1/3 top-1/3 h-2 w-2 rounded-full bg-indigo-500" />
        <span className="absolute left-2/3 top-1/2 h-2 w-2 rounded-full bg-indigo-500" />
        <span className="absolute left-1/2 top-2/3 h-2 w-2 rounded-full bg-indigo-500" />
      </div>

      <div className="mt-4 space-y-3">
        <Row flag="🇺🇸" country="USA" customers="32,759 Customers" value={79} />
        <Row
          flag="🇫🇷"
          country="France"
          customers="9,820 Customers"
          value={23}
        />
      </div>
    </div>
  );
}

function Row({ flag, country, customers, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg">{flag}</span>
      <div className="flex-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-900">{country}</span>
          <span className="text-gray-900">{value}%</span>
        </div>
        <div className="mt-1 h-2 rounded bg-gray-100 overflow-hidden">
          <div
            className="h-full bg-indigo-600"
            style={{ width: `${value}%` }}
          />
        </div>
        <div className="text-[11px] text-gray-500 mt-1">{customers}</div>
      </div>
    </div>
  );
}
