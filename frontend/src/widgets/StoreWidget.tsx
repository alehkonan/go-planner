import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import words from '../data/words.json';
import { useDialog } from '../hooks/useDialog';

export const StoreWidget = () => {
  const dialog = useDialog();

  return (
    <div>
      <Button onClick={dialog.open}>Open store</Button>
      <Dialog ref={dialog.ref}>
        {words.map((word) => (
          <p
            key={word.id}
            className="border-border grid grid-cols-2 border-b p-2"
          >
            <span>{word.original}</span>
            <span>{word.translation}</span>
          </p>
        ))}
        <Button onClick={dialog.close}>Close</Button>
      </Dialog>
    </div>
  );
};
