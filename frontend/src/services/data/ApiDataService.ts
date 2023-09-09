import ky from 'ky';

import { Word } from '../../types';
import { DataService } from './DataService.interface';

export class ApiDataService implements DataService {
  private api;

  constructor() {
    this.api = ky.create({
      prefixUrl: '/api',
    });
  }

  getAllWords() {
    return this.api.get('words').json<Word[]>();
  }

  addWord(word: Word) {
    this.api.post('words', { json: word });
  }
}
