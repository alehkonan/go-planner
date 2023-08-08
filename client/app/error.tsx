'use client';

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ErrorBoundary;
