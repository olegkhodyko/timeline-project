type YearType = 'start' | 'end';

export interface YearItemProps {
  type: YearType;
  title: string;
}

export interface CircleItem {
  id: number;
  angle: number;
}

export interface DotComponentProps {
  item: CircleItem;
  isActive: boolean;
  x: number;
  y: number;
  onClick: (item: CircleItem) => void;
}
