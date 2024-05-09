import React from 'react';
import backgroundImage from '../../assets/images/hero-bg.png';

const WaitingList: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url('${backgroundImage}')`,
    padding: '0',
    margin: '0',
  };
  return (
    <div style={containerStyle} className='bg-cover bg-center h-screen bg-no-repeat'>
      <div className='px-6 md:px-10 lg:px-16 xl:px-32'>vdvav</div>
    </div>
  );
};

export default WaitingList;
