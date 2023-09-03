import {
  type ComponentProps,
  forwardRef,
  type MutableRefObject,
  type PropsWithChildren,
} from 'react';
import { twJoin } from 'tailwind-merge';

type Props = ComponentProps<'dialog'>;

export const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<Props>>(
  ({ className, children, ...props }, ref) => {
    const onClose = () => {
      const r = ref as MutableRefObject<HTMLDialogElement>;
      r.current.close();
    };

    return (
      <dialog
        ref={ref}
        className={twJoin([
          'relative',
          'w-11/12 max-w-3xl rounded-lg p-2',
          'overflow-auto border',
          'backdrop:bg-transparent backdrop:backdrop-blur',
          'animate-appear',
          className,
        ])}
        {...props}
      >
        <button
          className={twJoin([
            'grid h-10 w-10 place-items-center',
            'absolute right-0 top-0 rounded-lg',
            'hover:bg-rose-50 text-xl transition-colors',
          ])}
          type="button"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </dialog>
    );
  },
);

Dialog.displayName = 'Dialog';
