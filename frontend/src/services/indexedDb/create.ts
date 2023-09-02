import { type DBSchema, openDB } from 'idb';

export interface Database extends DBSchema {
  words: {
    key: string;
    value: string;
  };
}

export const createDb = async () => {
  const db = await openDB<Database>('database', 1, {
    upgrade: (d) => {
      d.createObjectStore('words');
    },
  });

  return db;
};
