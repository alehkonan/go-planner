import { type IDBPDatabase } from 'idb';
import { createContext } from 'react';

import { type Database } from './database';

export type IdbInstance = IDBPDatabase<Database> | null;

export const IdbContext = createContext<IdbInstance>(null);
