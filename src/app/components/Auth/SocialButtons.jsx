export function GoogleButton(props) {
  return (
    <button
      type="button"
      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      {...props}
    >
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 33.3 29.4 36 24 36c-7.2 0-13-5.8-13-13S16.8 10 24 10c3.3 0 6.3 1.2 8.6 3.2l5.7-5.7C34.5 3.1 29.5 1 24 1 10.7 1 0 11.7 0 25s10.7 24 24 24 24-10.7 24-24c0-1.6-.2-3.2-.4-4.5z"/>
        <path fill="#FF3D00" d="M6.2 14.7l6.6 4.8C14.5 16 18.8 13 24 13c3.3 0 6.3 1.2 8.6 3.2l5.7-5.7C34.5 6.1 29.5 4 24 4 15.3 4 7.8 8.9 4.2 16.1l2 1.6z"/>
        <path fill="#4CAF50" d="M24 46c5.3 0 10.2-2 13.9-5.3l-6.4-5.2C29.2 37.1 26.7 38 24 38c-5.3 0-9.8-3.4-11.4-8.2l-6.5 5C9.7 41.1 16.3 46 24 46z"/>
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 3-3.1 5.5-5.7 7.3l.1.1 6.4 5.2C38.5 38.7 42 32.5 42 25c0-1.6-.2-3.2-.4-4.5z"/>
      </svg>
      Sign in with Google
    </button>
  );
}

export function FacebookButton(props) {
  return (
    <button
      type="button"
      className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      {...props}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10.5V8.75c0-.69.56-1.25 1.25-1.25H16V5h-1.75A3.25 3.25 0 0 0 11 8.25v2.25H9v2.5h2V19h2v-4h2l.5-2.5H13z"/>
      </svg>
      Sign in with Facebook
    </button>
  );
}
