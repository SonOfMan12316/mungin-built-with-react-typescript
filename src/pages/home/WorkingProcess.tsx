import React from 'react';
import workingProcessImg from '../../assets/images/working-process.png';

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
      'Identify suitable crops based on climate, soil conditions, and market demand.Plan crop rotation to maintain soil fertility and prevent diseases.',
  },
  {
    id: 2,
    img: `${workingProcessImg}`,
    header: 'Crop Monitoring',
    paragraph:
      "Regularly checking the crop's health and growth.Adjusting farming practices as needed.",
  },
  {
    id: 3,
    img: `${workingProcessImg}`,
    header: 'Technology Integration',
    paragraph:
      'Adopting modern agricultural technologies for efficiency.Implementing precision farming techniques.',
  },
];

const WorkingProcess = () => {
  return (
    <div className=''>
      <div className='bg-white py-10 lg:py-12'>
        <h2 className='text-center text-xl sm:text-3xl md:text-3xl xl:text-4xl font-medium sm:font-semibold lg:font-bold  font-serif'>
          Working Process
        </h2>
        <div>
          {processItems.map((item) => (
            <div key={item.id}>
              <img src={item.img} />
              <h2>{item.header}</h2>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
