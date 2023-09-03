import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'button'>;

export const Button = ({ className, type = 'button', ...props }: Props) => {
  return (
    <button
      className={twMerge([
        'rounded-lg p-4 shadow',
        'bg-rose-50',
        'font-semibold',
        className,
      ])}
      type={type}
      {...props}
    />
  );
};
