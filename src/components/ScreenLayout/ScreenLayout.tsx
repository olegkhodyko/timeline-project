import React, { FC, ReactNode } from 'react';
import './ScreenLayout.scss';

interface ScreenLayoutProp {
  children: ReactNode;
}

const ScreenLayout: FC<ScreenLayoutProp> = ({ children }) => (
  <div className="layoutWrapper">{children}</div>
);

export default ScreenLayout;
