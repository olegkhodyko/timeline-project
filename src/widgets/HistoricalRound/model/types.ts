type YearType = 'start' | 'end';

export interface UseCircleState {
  rotation: number;
  activeId: number | null;
  items: CircleItem[];
  handleClick: (id: CircleItem['id']) => void;
}

export interface YearItemProps {
  type: YearType;
  title: string;
}

export interface CircleItem {
  id: number;
  angle: number;
}

export interface DotComponentProps extends Pick<UseCircleState, 'handleClick'> {
  item: CircleItem;
  isActive: boolean;
  x: number;
  y: number;
}
