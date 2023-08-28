import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { useDialog } from '../hooks/useDialog';

export const NewWordWidget = () => {
  const dialog = useDialog();

  return (
    <div>
      <Button onClick={dialog.open}>New word</Button>
      <Dialog ref={dialog.ref}>
        <p>Add new word</p>
        <Button onClick={dialog.close}>Close</Button>
      </Dialog>
    </div>
  );
};
