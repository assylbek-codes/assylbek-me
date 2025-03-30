'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We're sorry, but there was an error loading this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
} 