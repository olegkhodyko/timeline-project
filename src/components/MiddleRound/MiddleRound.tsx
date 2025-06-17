import React from 'react';
import './MiddleRound.scss';
import Components from '@/components';

const MiddleRound = () => {
  return (
    <div className="roundWrapper">
      <div className="circle" />
      <div className="yearsWrapper">
        <Components.Year type="start" title="2015" />
        <Components.Year type="end" title="2022" />
      </div>
    </div>
  );
};

export default MiddleRound;
