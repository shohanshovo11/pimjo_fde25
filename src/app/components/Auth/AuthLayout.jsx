export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="w-full bg-white flex items-center justify-center py-20 md:py-28">
      <div className="max-w-[400px]">
        <header className="text-center mb-6">
          <h1 className="text-[36px] md:text-5xl font-semibold text-gray-900 tracking-normal leading-[52px]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </main>
  );
}
