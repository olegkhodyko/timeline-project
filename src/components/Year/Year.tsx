import { FC } from 'react';
import './Year.scss';

interface YearProps {
  type: 'start' | 'end';
  title: string;
}

const Year: FC<YearProps> = ({ type, title }) => (
  <p className={`text ${type === 'start' ? 'primary' : 'secondary'}`}>
    {title}
  </p>
);

export default Year;
