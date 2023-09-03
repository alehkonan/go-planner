import { useForm } from 'react-hook-form';

import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { ErrorMessage } from '../components/ErrorMessage';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { useDialog } from '../hooks/useDialog';
import { useIdb } from '../services/indexedDb/useIdb';

type FormValues = {
  original: string;
  translation: string;
};

export const NewWordWidget = () => {
  const dialog = useDialog();
  const db = useIdb();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    if (!db) {
      setError('root', { message: 'DB is not ready yet' });
      return;
    }

    try {
      await db.add('words', values);
      dialog.close();
      reset();
    } catch (error) {
      if (error instanceof Error) {
        setError('root', { message: error.message });
      }
    }
  };

  return (
    <div>
      <Button onClick={dialog.open}>New word</Button>
      <Dialog ref={dialog.ref}>
        <Title>Add new word</Title>
        <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Original"
            error={errors.original?.message}
            {...register('original', { required: 'required' })}
          />
          <Input
            label="Translation"
            error={errors.translation?.message}
            {...register('translation', { required: 'required' })}
          />
          <Button type="submit">Add</Button>
        </form>
        {errors.root?.message && <ErrorMessage message={errors.root.message} />}
      </Dialog>
    </div>
  );
};
