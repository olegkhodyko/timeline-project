import './HistoricalRound.scss';
import { FC, useCallback, useMemo, useState } from 'react';
import { DotComponent } from './DotComponent';
import { CircleItem } from '../model/types';

const generateItems = (count: number): CircleItem[] => {
  const angleStep = 360 / count;
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: i * angleStep,
  }));
};

const Circle: FC = () => {
  const [rotation, setRotation] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);

  const totalItems = 6;
  const items = useMemo(() => generateItems(totalItems), [totalItems]);

  const radius = 50;
  const targetAngle = -60;

  const normalizeAngle = (angle: number) => {
    return ((angle % 360) + 360) % 360;
  };

  const handleClick = useCallback(
    (item: CircleItem) => {
      const currentItemAngle = normalizeAngle(item.angle + rotation);
      const angleToRotate = normalizeAngle(targetAngle - currentItemAngle);
      const shortRotation =
        angleToRotate > 180 ? angleToRotate - 360 : angleToRotate;

      setRotation((r) => r + shortRotation);
      setActiveId(item.id);
    },
    [rotation],
  );

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
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          const isActive = item.id === activeId;

          return (
            <DotComponent
              key={item.id}
              item={item}
              onClick={handleClick}
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
