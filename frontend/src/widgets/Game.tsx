import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { useDialog } from '../hooks/useDialog';

export const GameWidget = () => {
  const dialog = useDialog();

  return (
    <div className="grid place-items-center">
      <Button onClick={dialog.open}>Let&apos;s go</Button>
      <Dialog ref={dialog.ref}>
        <p>Dialog content</p>
        <Button onClick={dialog.close}>Close</Button>
      </Dialog>
    </div>
  );
};
