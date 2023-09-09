import { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { Title } from '../components/Title';
import { useDialog } from '../hooks/useDialog';
import { useDataService } from '../providers/DataService';
import { Word } from '../types';

export const StoreWidget = () => {
  const dialog = useDialog();
  const dataService = useDataService();

  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    dataService.getAllWords().then(setWords);
  }, [dataService]);

  return (
    <div>
      <Button onClick={dialog.open}>Open store</Button>
      <Dialog ref={dialog.ref}>
        <Title>All words</Title>
        <p className="grid grid-cols-2 text-gray-300">
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
