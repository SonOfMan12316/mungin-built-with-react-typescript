import React from 'react';
import Hero from './Hero';
import WorkingProcess from './WorkingProcess';
import OurMission from './OurMission';
import Partner from './Partner';

const Index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <WorkingProcess />
      <OurMission />
      <Partner />
    </div>
  );
};

export default Index;
