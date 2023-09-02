import { type IDBPDatabase } from 'idb';
import { createContext } from 'react';

import { type Database } from './create';

type Context = {
  db: IDBPDatabase<Database> | undefined;
};

export const IdbContext = createContext<Context | null>(null);
