import { useState, useCallback, useMemo } from 'react';
import { CircleItem, UseCircleState } from '../model/types';
import { TOTAL_ITEMS, TARGET_ANGLE } from '../model/constants';
import { generateItems, calculateRotation } from '../model/logic';

const useCircle = (): UseCircleState => {
  const [rotation, setRotation] = useState<number>(0);
  const [activeId, setActiveId] = useState<number | null>(null);

  const items = useMemo(() => generateItems(TOTAL_ITEMS), [TOTAL_ITEMS]);

  const handleClick = useCallback(
    (id: CircleItem['id']) => {
      const item = items.find((el) => el.id === id);
      if (!item) return;

      const shortRotation = calculateRotation(
        item.angle,
        rotation,
        TARGET_ANGLE,
      );
      setRotation((r) => r + shortRotation);
      setActiveId((current) => (current === id ? null : id));
    },
    [items, rotation],
  );

  return { rotation, activeId, items, handleClick };
};

export default useCircle;
