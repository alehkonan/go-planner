import { useContext } from 'react';

import { IdbContext } from './context';

export const useIdb = () => {
  const context = useContext(IdbContext);

  if (context === null) {
    throw new Error('useContext is used outside of the Provider');
  }

  return context;
};
