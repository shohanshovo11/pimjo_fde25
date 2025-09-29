export default function DividerOr({ label = "Or sign in with email" }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px w-full bg-gray-200" />
      <span className="text-xs text-gray-500 whitespace-nowrap">{label}</span>
      <div className="h-px w-full bg-gray-200" />
    </div>
  );
}
