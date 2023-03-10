'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen grid place-content-center text-3xl">
      <h2>Something went wrong!</h2>
      <button className="rounded-lg border border-solid border-slate-900 bg-slate-50 dark:bg-slate-900 p-2 text-center hover:bg-slate-200 dark:border-slate-50 mt-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
