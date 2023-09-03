import { type PropsWithChildren, useEffect, useState } from 'react';

import { IdbContext, type IdbInstance } from './context';
import { createDb } from './database';

export const IdbProvider = ({ children }: PropsWithChildren) => {
  const [db, setDb] = useState<IdbInstance>(null);

  useEffect(() => void createDb().then(setDb), []);

  return <IdbContext.Provider value={db}>{children}</IdbContext.Provider>;
};
