import React, { forwardRef } from 'react';
import ourMissionLogo from '../../assets/images/our-mission.png';
import ourMissionContentImg from '../../assets/images/mission-content.png';
import useHoverState from '../../utils/hooks/useHover';
import Tree from '../../components/icons/Tree';
import FirstMission from '../../components/icons/FirstMission';
import SecondMission from '../../components/icons/SecondMission';
import ThirdMission from '../../components/icons/ThirdMission';
import FourthMission from '../../components/icons/FourthMission';
import FifthMission from '../../components/icons/FifthMission';
import SixthMission from '../../components/icons/SixthMission';

type OurMissionProps = {
  id: string;
};

interface OurMissionContent {
  id: number;
  img: string;
  header: string;
  paragraph: string;
  svgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  svgStyle?: React.CSSProperties;
}

const ourMissionContent: OurMissionContent[] = [
  {
    id: 1,
    img: `${ourMissionContentImg}`,
    header: 'Axiom Open',
    paragraph:
      'An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.',
    svgComponent: FirstMission,
    svgStyle: {
      position: 'absolute',
      right: '-4rem',
      top: '2.5rem',
    },
  },
  {
    id: 2,
    img: `${ourMissionContentImg}`,
    header: 'Data Insights and Predictive Models',
    paragraph:
      'An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.',
    svgComponent: SecondMission,
    svgStyle: {
      position: 'absolute',
      left: '-2.25rem',
      top: '2rem',
    },
  },
  {
    id: 3,
    img: `${ourMissionContentImg}`,
    header: 'Crop nutrition digital platform',
    paragraph:
      'Creating clear sustainable impact by leveraging Axiom’s core technology and data insights to lead the crop nutrition revolution with a digital support system that drives nutrition optimization.',
    svgComponent: ThirdMission,
    svgStyle: {
      position: 'absolute',
      right: '-0.25rem',
      top: '0rem',
    },
  },
  {
    id: 4,
    img: `${ourMissionContentImg}`,
    header: 'Axiom Open',
    paragraph:
      'An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.',
    svgComponent: FourthMission,
    svgStyle: {
      position: 'absolute',
      left: '-1.75rem',
      top: '2.5rem',
    },
  },
  {
    id: 5,
    img: `${ourMissionContentImg}`,
    header: 'Crop nutrition digital platform',
    paragraph:
      'Creating clear sustainable impact by leveraging Axiom’s core technology and data insights to lead the crop nutrition revolution with a digital support system that drives nutrition optimization.',
    svgComponent: FifthMission,
    svgStyle: {
      position: 'absolute',
      right: '-0.75rem',
      top: '0rem',
    },
  },
  {
    id: 6,
    img: `${ourMissionContentImg}`,
    header: 'Axiom Open',
    paragraph:
      'An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.',
    svgComponent: SixthMission,
    svgStyle: {
      position: 'absolute',
      left: '-2.25rem',
      top: '0rem',
    },
  },
];

const OurMission: React.ForwardRefRenderFunction<HTMLDivElement, OurMissionProps> = (
  { id },
  ref,
) => {
  const [hoveredItem, { handleMouseEnter, handleMouseLeave }] = useHoverState(
    Array(ourMissionContent.length).fill(false),
  );
  const customStyle = {
    position: 'absolute',
    left: '23rem',
    top: '4rem',
  };
  return (
    <div id={id} ref={ref} style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <div className='px-6 md:px-10 lg:px-16 xl:px-32 py-10 lg:py-20 xl:py-24'>
        <div className='flex justify-center items-center mb-4'>
          <img src={ourMissionLogo} />
        </div>
        <div className='sm:flex sm:justify-center'>
          <p className='text-center text-xs md:text-sm sm:w-8/12 lg:w-6/12 xl:w-5/12'>
            Committed to nurturing a sustainable agricultural future, our mission revolves around
            fostering resilient farming communities.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center  sm:mt-6 lg:mt-10'>
          <div>
            <div className='flex lg:block flex-col justify-center items-center cursor-pointer'></div>
            <div className='flex lg:block flex-col justify-center items-center pb-2'>
              <h3 className='font-serif text-sm md:text-base font-semibold md:font-bold'></h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12'></p>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:justify-items-center xl:gap-x-60 sm:mt-6 lg:mt-10 xl:w-full relative'>
          <Tree style={customStyle} className='hidden xl:block' />
          {ourMissionContent.map((content, index) => (
            <div className='xl:flex xl:flex-row' key={content.id}>
              <div className=''>
                <div className='relative flex lg:block flex-col justify-center lg:justify-start items-center md:pb-1 lg:pb-0'>
                  <img
                    className={`${hoveredItem[index] ? 'shake-animation cursor-pointer' : ''}`}
                    src={content.img}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  />
                  {content.svgComponent && (
                    <content.svgComponent style={content.svgStyle} className='hidden xl:block' />
                  )}
                </div>
                <div className='flex lg:block flex-col justify-center lg:justify-start items-center pb-2 lg:pb-0 md:-pt-1 lg:ml-7'>
                  <h3 className='font-serif text-sm md:text-base  font-semibold md:font-bold'>
                    {content.header}
                  </h3>
                </div>
                <div className='flex lg:block flex-col justify-center items-center  md:pt-1.5 lg:pt-0 lg:pl-7 xl:pl-7'>
                  <p
                    style={{ color: '#7D7D7D' }}
                    className='text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full'
                  >
                    {content.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(OurMission);
