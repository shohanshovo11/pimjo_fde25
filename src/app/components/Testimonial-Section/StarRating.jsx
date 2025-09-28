export default function StarRating({ value = 5, className = "" }) {
  const stars = Array.from({ length: 5 });
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars.map((_, i) => {
        const idx = i + 1;
        if (idx <= full) {
          // full star
          return (
            <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 text-amber-500 fill-current">
              <path d="M10 15.27 15.18 18l-1.64-5.03L18 8.24l-5.19-.04L10 3 7.19 8.2 2 8.24l4.46 4.73L4.82 18 10 15.27z"/>
            </svg>
          );
        }
        if (hasHalf && idx === full + 1) {
          // half star
          return (
            <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 text-amber-500">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor"/>
                  <stop offset="50%" stopColor="transparent"/>
                </linearGradient>
              </defs>
              <path d="M10 15.27 15.18 18l-1.64-5.03L18 8.24l-5.19-.04L10 3 7.19 8.2 2 8.24l4.46 4.73L4.82 18 10 15.27z"
                    fill="url(#half)" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          );
        }
        // empty star
        return (
          <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 text-amber-300">
            <path d="M10 15.27 15.18 18l-1.64-5.03L18 8.24l-5.19-.04L10 3 7.19 8.2 2 8.24l4.46 4.73L4.82 18 10 15.27z"
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      })}
    </div>
  );
}
