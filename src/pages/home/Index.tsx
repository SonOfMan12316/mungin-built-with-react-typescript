import React from 'react';
import Hero from './Hero';
import WorkingProcess from './WorkingProcess';
import OurMission from './OurMission';
import Partner from './Partner';
import Footer from './Footer';

const Index = () => {
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    ourMissionSection: React.createRef<HTMLDivElement>(),
    workingProcessSection: React.createRef<HTMLDivElement>(),
  };

  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='overflow-x-hidden'>
      <Hero onNavButtonClick={scrollToSection} />
      <WorkingProcess id='workingProcessSection' ref={sectionRefs.workingProcessSection} />
      <OurMission id='ourMissionSection' ref={sectionRefs.ourMissionSection} />
      <Partner />
      <Footer onNavButtonClick={scrollToSection} />
    </div>
  );
};

export default Index;
