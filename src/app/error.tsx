"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h2 className="text-4xl font-bold text-white">
        Some Errors Occurred {error.message}
      </h2>
      <button
        className="rounded-md border-2 border-slate-100 shadow-md mt-8 p-4"
        onClick={reset}
      >
        Refresh
      </button>
    </div>
  );
}
