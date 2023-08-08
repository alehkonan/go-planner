import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Words',
};

const WordsPage: NextPage = () => {
  return (
    <div>
      <p>Words</p>
    </div>
  );
};

export default WordsPage;
