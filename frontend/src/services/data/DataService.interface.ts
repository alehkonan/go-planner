import { Word } from '../../types';

export interface DataService {
  getAllWords(): Promise<Word[]>;
  addWord(word: Word): void;
}
