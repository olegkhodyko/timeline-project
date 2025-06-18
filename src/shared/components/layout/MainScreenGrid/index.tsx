import { FC, ReactNode } from 'react';
import './MainScreenGrid.scss';

interface ScreenLayoutProp {
  children: ReactNode;
}

const MainScreenGrid: FC<ScreenLayoutProp> = ({ children }) => (
  <main className="mainScreenContainer">{children}</main>
);

export default MainScreenGrid;
