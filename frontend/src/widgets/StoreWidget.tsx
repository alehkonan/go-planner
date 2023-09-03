import { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { Title } from '../components/Title';
import { useDialog } from '../hooks/useDialog';
import { useIdb } from '../services/indexedDb/useIdb';
import type { Word } from '../types';

export const StoreWidget = () => {
  const [words, setWords] = useState<Word[]>([]);

  const dialog = useDialog();
  const db = useIdb();

  useEffect(() => {
    db?.getAll('words').then(setWords);
  }, [db]);

  return (
    <div>
      <Button onClick={dialog.open}>Open store</Button>
      <Dialog ref={dialog.ref}>
        <Title>All words</Title>
        <p className="text-gray-300 grid grid-cols-2">
          <span>Original</span>
          <span>Translation</span>
        </p>
        {words.map((word) => (
          <p key={word.original} className="grid grid-cols-2 border-b p-2">
            <span>{word.original}</span>
            <span>{word.translation}</span>
          </p>
        ))}
      </Dialog>
    </div>
  );
};
