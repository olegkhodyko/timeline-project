import { MainScreenGrid } from '@/shared/components/layout';
import { HistoricalDates, HistoricalRound } from '@/widgets';

const MainScreen = () => (
  <MainScreenGrid>
    <HistoricalDates />
    <HistoricalRound />
  </MainScreenGrid>
);

export default MainScreen;
