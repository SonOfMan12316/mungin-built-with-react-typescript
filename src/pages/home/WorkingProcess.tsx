import React from 'react';
import workingProcessImg from '../../assets/images/working-process.png';
import { SinusodialLine } from '../../components/icons';
import '../../assets/styles/ShakeOnHover.css';
import useHoverState from '../../utils/hooks/useHover';

interface ProcessItem {
  id: number;
  img: string;
  header: string;
  paragraph: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    img: `${workingProcessImg}`,
    header: 'Planning and Crop Selection',
    paragraph:
      'Identify suitable crops based on climate, soil conditions, and market demand.Plan crop rotation .',
  },
  {
    id: 2,
    img: `${workingProcessImg}`,
    header: 'Crop Monitoring',
    paragraph:
      'Regularly monitor crop health, adjust farming practices for optimal growth, ensuring robust and sustainable cultivation.',
  },
  {
    id: 3,
    img: `${workingProcessImg}`,
    header: 'Technology Integration',
    paragraph:
      'Adopting modern agricultural technologies for efficiency.Implementing precision farming techniques.',
  },
];
const isLargeScreen = window.innerWidth >= 1200;

const WorkingProcess: React.FC = () => {
  const [hoveredItem, { handleMouseEnter, handleMouseLeave }] = useHoverState(
    Array(processItems.length).fill(false),
  );

  return (
    <div className=' lg:px-16'>
      <div className='bg-white py-10 lg:py-12'>
        <h2 className='text-center text-xl sm:text-3xl md:text-3xl xl:text-4xl font-medium sm:font-semibold lg:font-bold  font-serif'>
          Working Process
        </h2>
        <div className='lg:grid lg:grid-cols-3 mt-4 xl:w-11/12 xl:mx-auto'>
          {processItems.map((item, index) => (
            <div className='flex flex-col items-center justify-center relative' key={item.id}>
              <img
                className={`${hoveredItem[index] ? 'shake-animation cursor-pointer' : ''}`}
                src={item.img}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
              <h2 className='text-sm md:text-base font-medium md:font-semibold pb-2'>
                {item.header}
              </h2>
              <p className='text-center text-xs md:text-sm font-normal md:font-medium w-10/12 sm:w-8/12 md:w-10/12 lg:w-10/12'>
                {item.paragraph}
              </p>
              {isLargeScreen && (index === 0 || index === 1) && (
                <SinusodialLine className='absolute top-6 -right-28' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
