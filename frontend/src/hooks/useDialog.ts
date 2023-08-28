import { useCallback, useRef } from 'react';

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => ref.current?.showModal(), []);
  const close = useCallback(() => ref.current?.close(), []);

  return {
    ref,
    open,
    close,
  };
};
