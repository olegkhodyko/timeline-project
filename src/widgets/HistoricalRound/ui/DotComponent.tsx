import { FC, memo } from 'react';
import { DotComponentProps } from '../model/types';

export const DotComponent: FC<DotComponentProps> = memo(
  ({ onClick, item, isActive, x, y }) => (
    <button
      aria-pressed={isActive}
      className={`dot ${isActive ? 'active' : ''}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={() => onClick(item)}
    />
  ),
);
