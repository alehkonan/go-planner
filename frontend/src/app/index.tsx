import { useDialog } from '../hooks/useDialog';

export const App = () => {
  const dialog = useDialog();

  return (
    <div>
      <button className="button" type="button" onClick={dialog.open}>
        Open modal
      </button>
      <dialog ref={dialog.ref}>
        <p>Dialog content</p>
        <button className="button" type="button" onClick={dialog.close}>
          Close
        </button>
      </dialog>
    </div>
  );
};
