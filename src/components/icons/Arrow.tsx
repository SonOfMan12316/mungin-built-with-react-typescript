import React from 'react';
import svg from '../../assets/svg/eva_arrow-forward-outline.svg';

const Arrow: React.FC = () => {
  const arrowStyle = {
    background: '#83BF4F',
    borderRadius: '0px 4px 4px 0px',
  };
  return (
    <div
      style={arrowStyle}
      className='arrow w-10 h-10 lg:h-10 rounded-lg flex justify-center items-center'
    >
      <img src={svg} />
    </div>
  );
};

export default Arrow;
