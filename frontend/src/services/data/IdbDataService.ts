import { type DBSchema, type IDBPDatabase, openDB } from 'idb';

import { Word } from '../../types';
import { DataService } from './DataService.interface';

export interface Database extends DBSchema {
  words: {
    key: string;
    value: Word;
  };
}

export class IdbDataService implements DataService {
  private db: IDBPDatabase<Database> | null = null;

  constructor() {
    this.#createDb();
  }

  async #createDb() {
    const db = await openDB<Database>('database', 1, {
      upgrade: (d) => {
        d.createObjectStore('words', { keyPath: 'original' });
      },
    });

    this.db = db;
  }

  async getAllWords() {
    const words = (await this.db?.getAll('words')) || [];

    return words;
  }

  async addWord(word: Word) {
    await this.db?.add('words', word);
  }
}
