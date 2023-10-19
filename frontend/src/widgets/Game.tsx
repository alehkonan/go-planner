import { twJoin } from 'tailwind-merge';
import { Button } from '../components/Button';
import { Dialog } from '../components/Dialog';
import { useDialog } from '../hooks/useDialog';

const imgUrl =
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww';

const cards = [
  {
    id: 1,
    en: 'banana',
    ka: 'ბანანი',
    img: imgUrl,
  },
  {
    id: 2,
    en: 'banana',
    ka: 'ბანანი',
    img: imgUrl,
  },
  {
    id: 3,
    en: 'banana',
    ka: 'ბანანი',
    img: imgUrl,
  },
];

export const GameWidget = () => {
  const dialog = useDialog();

  return (
    <div className="grid place-items-center">
      <Button onClick={dialog.open}>Let&apos;s go</Button>
      <Dialog ref={dialog.ref}>
        <div className="overflow-hidden">
          <div className="flex w-fit snap-x snap-mandatory gap-2 overflow-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                className={twJoin([
                  'flex-shrink-0',
                  'grid w-fit justify-items-center',
                  'snap-center snap-always',
                  'rounded border p-3',
                ])}
              >
                <img src={card.img} alt="random" />
                <p>{card.en}</p>
                <p>{card.ka}</p>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
};
