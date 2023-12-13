import React from 'react';
import ourMission from '../../assets/images/our-mission.png';

const OurMission: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <div className='px-6 md:px-10 lg:px-16 xl:px-32 py-10 lg:py-20 xl:py-24'>
        <div className='flex justify-center items-center mb-4'>
          <img src={ourMission} />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
