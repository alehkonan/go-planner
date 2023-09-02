import { type IDBPDatabase } from 'idb';
import { PropsWithChildren, useEffect, useState } from 'react';

import { IdbContext } from './context';
import { createDb, type Database } from './create';

export const IdbProvider = ({ children }: PropsWithChildren) => {
  const [db, setDb] = useState<IDBPDatabase<Database>>();

  useEffect(() => void createDb().then(setDb), []);

  return <IdbContext.Provider value={{ db }}>{children}</IdbContext.Provider>;
};
