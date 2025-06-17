import Components from '@/components';
import { FC } from 'react';

const App: FC = () => (
  <Components.ScreenLayout>
    <Components.HistoricalDates />
    <Components.MiddleRound />
  </Components.ScreenLayout>
);

export default App;
