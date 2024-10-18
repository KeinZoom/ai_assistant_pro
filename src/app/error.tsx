"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Some Errors Occurred {error.message}</h2>
      <button onClick={reset}>Refresh</button>
    </div>
  );
}
