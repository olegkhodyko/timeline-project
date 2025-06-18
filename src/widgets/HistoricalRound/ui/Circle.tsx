import './HistoricalRound.scss';
import { FC } from 'react';
import { DotComponent } from './DotComponent';
import { useCircle } from '../hooks';
import { RADIUS } from '../model/constants';

const Circle: FC = () => {
  const { rotation, activeId, items, handleClick } = useCircle();

  return (
    <figure className="circleWrapper">
      <div
        className="circleInner"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.9s ease-in-out',
        }}
      >
        {items.map((item) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = 50 + RADIUS * Math.cos(rad);
          const y = 50 + RADIUS * Math.sin(rad);
          const isActive = item.id === activeId;

          return (
            <DotComponent
              key={item.id}
              item={item}
              handleClick={handleClick}
              isActive={isActive}
              x={x}
              y={y}
            />
          );
        })}
      </div>
    </figure>
  );
};

export default Circle;
