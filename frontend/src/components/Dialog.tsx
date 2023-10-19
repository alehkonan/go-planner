/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  type ComponentProps,
  forwardRef,
  type MutableRefObject,
  type PropsWithChildren,
} from 'react';
import { twJoin } from 'tailwind-merge';

type Props = Omit<ComponentProps<'dialog'>, 'style' | 'className'>;

export const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<Props>>(
  ({ children, ...props }, ref) => {
    const onClose = () => {
      const r = ref as MutableRefObject<HTMLDialogElement>;
      r.current.close();
    };

    return (
      <dialog
        ref={ref}
        className={twJoin([
          'overflow-auto',
          'backdrop:bg-transparent backdrop:backdrop-blur',
          'animate-appear',
        ])}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        {...props}
      >
        {children}
      </dialog>
    );
  },
);

Dialog.displayName = 'Dialog';
