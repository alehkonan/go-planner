import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'div'>;

export const Page = ({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <div className={twMerge(['h-screen pb-4', className])} {...props}>
      {children}
    </div>
  );
};
