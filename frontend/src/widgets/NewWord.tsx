import { useForm } from 'react-hook-form';

import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { ErrorMessage } from '../components/ErrorMessage';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { useDialog } from '../hooks/useDialog';
import { useDataService } from '../providers/DataService';

type FormValues = {
  original: string;
  translation: string;
};

export const NewWordWidget = () => {
  const dataService = useDataService();
  const dialog = useDialog();
  const form = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    dataService.addWord(values);
    dialog.close();
    form.reset();
  };

  return (
    <div>
      <Button onClick={dialog.open}>New word</Button>
      <Dialog ref={dialog.ref}>
        <Title>Add new word</Title>
        <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <Input
            label="Original"
            error={form.formState.errors.original?.message}
            {...form.register('original', { required: 'required' })}
          />
          <Input
            label="Translation"
            error={form.formState.errors.translation?.message}
            {...form.register('translation', { required: 'required' })}
          />
          <Button type="submit">Add</Button>
        </form>
        {form.formState.errors.root?.message && (
          <ErrorMessage message={form.formState.errors.root.message} />
        )}
      </Dialog>
    </div>
  );
};
