import { ComponentProps, forwardRef, PropsWithChildren } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = ComponentProps<'dialog'>;

export const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<Props>>(
  ({ className, ...props }, ref) => {
    return (
      <dialog
        ref={ref}
        className={twJoin([
          'w-11/12 max-w-3xl rounded-lg p-2',
          'border-border overflow-auto border',
          'backdrop:bg-transparent backdrop:backdrop-blur',
          'animate-appear',
          className,
        ])}
        {...props}
      />
    );
  },
);

Dialog.displayName = 'Dialog';
