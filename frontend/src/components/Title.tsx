import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => {
  return <h3 className="text-gray-500 text-lg font-semibold">{children}</h3>;
};
