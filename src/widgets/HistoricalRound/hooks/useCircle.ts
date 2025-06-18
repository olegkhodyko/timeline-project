import { useState, useCallback, useMemo } from 'react';
import { CircleItem } from '../model/types';
import { TOTAL_ITEMS, TARGET_ANGLE } from '../model/constants';
import { generateItems, calculateRotation } from '../model/logic';

interface UseCircleState {
  rotation: number;
  activeId: number | null;
  items: CircleItem[];
  handleClick: (item: CircleItem) => void;
}

const useCircle = (): UseCircleState => {
  const [rotation, setRotation] = useState<number>(0);
  const [activeId, setActiveId] = useState<number | null>(null);

  const items = useMemo(() => generateItems(TOTAL_ITEMS), [TOTAL_ITEMS]);

  const handleClick = useCallback(
    (item: CircleItem) => {
      const shortRotation = calculateRotation(
        item.angle,
        rotation,
        TARGET_ANGLE,
      );
      setRotation((r) => r + shortRotation);
      setActiveId((current) => (current === item.id ? null : item.id));
    },
    [rotation],
  );

  return { rotation, activeId, items, handleClick };
};

export default useCircle;
