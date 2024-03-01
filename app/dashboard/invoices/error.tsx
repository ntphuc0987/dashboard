'use client';

import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h2 className='text-center'>Something went wrong!</h2>
      <button
        className="text-while mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm transition-colors hover:bg-blue-400"
        type="button"
        onClick={() => {
          reset();
        }}
      >
        Try Again!
      </button>
    </main>
  );
};

export default Error;
