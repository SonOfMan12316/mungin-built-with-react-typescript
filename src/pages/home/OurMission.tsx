import React from 'react';
import ourMissionLogo from '../../assets/images/our-mission.png';
import ourMissionContentImg from '../../assets/images/mission-content.png';
import useHoverState from '../../utils/hooks/useHover';

interface OurMissionContent {
  id: number;
  img: string;
  header: string;
  paragraph: string;
}

const ourMissionContent: OurMissionContent[] = [
  {
    id: 1,
    img: `${ourMissionContentImg}`,
    header: 'Digital Field Trials',
    paragraph:
      'Digitizing agronomic research and field trials including planning, governance, data collection, analysis, and more.',
  },
  {
    id: 2,
    img: `${ourMissionContentImg}`,
    header: 'Data Insights and Predictive Models',
    paragraph:
      'Leveraging Axiom with deep agronomical knowledge and advanced data science for high-quality, credible data, and agriculture predictive modeling.',
  },
  {
    id: 3,
    img: `${ourMissionContentImg}`,
    header: 'Crop nutrition digital platform',
    paragraph:
      'Creating clear sustainable impact by leveraging Axiom’s core technology and data insights to lead the crop nutrition revolution with a digital support system that drives nutrition optimization.',
  },
  {
    id: 4,
    img: `${ourMissionContentImg}`,
    header: 'Axiom Open',
    paragraph:
      'An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.',
  },
  {
    id: 5,
    img: `${ourMissionContentImg}`,
    header: 'Crop nutrition digital platform',
    paragraph:
      'Creating clear sustainable impact by leveraging Axiom’s core technology and data insights to lead the crop nutrition revolution with a digital support system that drives nutrition optimization.',
  },
  {
    id: 6,
    img: `${ourMissionContentImg}`,
    header: 'Axiom Open',
    paragraph:
      'An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.',
  },
];

const OurMission: React.FC = () => {
  const [hoveredItem, { handleMouseEnter, handleMouseLeave }] = useHoverState(
    Array(ourMissionContent.length).fill(false),
  );
  return (
    <div style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
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
            <div className='flex lg:block flex-col justify-center items-center cursor-pointer'>
              {/* <img @mouseover="upFirstHere = true" @mouseleave="upFirstHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upFirstHere" class="absolute -top-2.5 -left-0.5 animate-bounce" src="../assets/images/Munji.png"/>
                            <SecondMissionSvg class="absolute hidden lg:block -left-9 top-8"/> */}
            </div>
            <div className='flex lg:block flex-col justify-center items-center pb-2'>
              <h3 className='font-serif text-sm md:text-base font-semibold md:font-bold'></h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12'></p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center xl:grid xl:grid-cols-2 xl:gap-x-24  sm:mt-6 lg:mt-10'>
          {ourMissionContent.map((content, index) => (
            <div className='flex flex-col items-center justify-center xl:w-11/12' key={content.id}>
              <img
                className={`${hoveredItem[index] ? 'shake-animation cursor-pointer' : ''}`}
                src={content.img}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
              <div>
                <h1 className='text-sm md:text-base  xl:text-start font-semibold pb-2'>
                  {content.header}
                </h1>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-center xl:text-start text-xs md:text-sm w-10/12 sm:w-8/12 md:w-10/12'>
                  {content.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
