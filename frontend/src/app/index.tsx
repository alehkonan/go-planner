import { Page } from '../components/Page';
import { GameWidget } from '../widgets/Game';
import { NewWordWidget } from '../widgets/NewWord';
import { StoreWidget } from '../widgets/StoreWidget';

export const App = () => {
  return (
    <Page className="grid grid-rows-[1fr_min-content] md:grid-rows-[min-content_1fr]">
      <GameWidget />
      <nav className="flex gap-2 p-4 md:row-start-1">
        <NewWordWidget />
        <StoreWidget />
      </nav>
    </Page>
  );
};
