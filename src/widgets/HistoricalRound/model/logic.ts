import { CircleItem } from './types';

export const generateItems = (count: number): CircleItem[] => {
  const angleStep = 360 / count;
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: i * angleStep,
  }));
};

export const normalizeAngle = (angle: number) => ((angle % 360) + 360) % 360;

export const calculateRotation = (
  itemAngle: number,
  currentRotation: number,
  targetAngle: number,
) => {
  const currentItemAngle = normalizeAngle(itemAngle + currentRotation);
  const angleToRotate = normalizeAngle(targetAngle - currentItemAngle);
  return angleToRotate > 180 ? angleToRotate - 360 : angleToRotate;
};
