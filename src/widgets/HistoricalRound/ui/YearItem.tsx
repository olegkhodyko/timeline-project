import './HistoricalRound.scss';
import { FC } from 'react';
import { YearItemProps } from '../model/types';

export const YearItem: FC<YearItemProps> = ({ type, title }) => (
  <p className={`yearText ${type === 'start' ? 'primary' : 'secondary'}`}>
    {title}
  </p>
);
