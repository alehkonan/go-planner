import { FormEvent } from 'react';

import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { useDialog } from '../hooks/useDialog';

const formFields = {
  word: 'word',
  translation: 'translation',
} as const;

export const NewWordWidget = () => {
  const dialog = useDialog();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const entries = Object.values(formFields).map((field) => [
      field,
      e.currentTarget[field]?.value,
    ]);
    console.log(Object.fromEntries(entries));
  };

  return (
    <div>
      <Button onClick={dialog.open}>New word</Button>
      <Dialog ref={dialog.ref}>
        <h3 className="text-xl font-bold">Add new word</h3>
        <form method="dialog" onSubmit={onSubmit} className="grid gap-2">
          <label htmlFor="word">New word</label>
          <input
            id="word"
            name={formFields.word}
            className="border p-2"
            required
          />
          <label htmlFor="translation">Translation</label>
          <input
            id="translation"
            name={formFields.translation}
            className="border p-2"
          />
          <div className="flex gap-4">
            <Button type="submit">Submit</Button>
            <Button onClick={dialog.close}>Close</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
