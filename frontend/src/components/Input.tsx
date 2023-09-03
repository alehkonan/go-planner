import { type ComponentPropsWithRef, forwardRef, useId } from 'react';
import { twJoin } from 'tailwind-merge';

import { ErrorMessage } from './ErrorMessage';

type Props = ComponentPropsWithRef<'input'> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    const inputId = useId();

    return (
      <div className="grid gap-1">
        {label && (
          <label htmlFor={inputId} className="text-gray-400 text-sm">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={twJoin([
            'border p-2',
            error && 'border-red-500 outline-red-500',
          ])}
          {...props}
        />
        {error && <ErrorMessage message={error} />}
      </div>
    );
  },
);

Input.displayName = 'Input';
