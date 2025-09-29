export default function SubmitButton({ children, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
    >
      {children}
    </button>
  );
}
