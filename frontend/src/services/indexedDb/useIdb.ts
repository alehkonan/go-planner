import { useContext } from 'react';

import { IdbContext } from './context';

export const useIdb = () => useContext(IdbContext);
