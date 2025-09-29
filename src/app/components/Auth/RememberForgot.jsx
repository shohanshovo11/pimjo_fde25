export default function RememberForgot() {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        Remember me
      </label>
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
        Forgot password?
      </a>
    </div>
  );
}
