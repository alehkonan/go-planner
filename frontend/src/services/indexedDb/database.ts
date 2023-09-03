import { type DBSchema, openDB } from 'idb';

import type { Word } from '../../types';

export interface Database extends DBSchema {
  words: {
    key: string;
    value: Word;
  };
}

export const createDb = async () => {
  const db = await openDB<Database>('database', 1, {
    upgrade: (d) => {
      d.createObjectStore('words', { keyPath: 'original' });
    },
  });

  return db;
};
