import React from 'react';
import FooterLogo from '../../assets/images/footer-logo.png';
import CaretRight from '../../components/icons/CaretRight';
import '../../assets/styles/footer.css';

type FooterProps = {
  onNavButtonClick: (sectionId: string) => void;
};

const Footer: React.FC<FooterProps> = ({ onNavButtonClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.location.reload();
  };

  return (
    <div className='footer bg-ch-footer'>
      <div
        className='
        footer-content
        flex
        md:grid
        flex-col
        justify-start
        gap-y-6
        pt-4
        px-6
        md:px-10
        lg:px-16
        xl:px-32
        py-6
      '
      >
        <div className='flex flex-col'>
          <div
            onClick={scrollToTop}
            className='
            image-div
            cursor-pointer
            flex
            items-center
            h-16
            mb-2
            lg:mb-0
            xl:mb-4
          '
          >
            <img className='image md:w-32 lg:w-36 xl:w-40' src={FooterLogo} />
          </div>
          <div className='w-1/2 my-2 flex justify-start mb-4'>
            <h1 className='font-serif text-white font-semibold text-sm lg:text-base'>About Us</h1>
          </div>
          <div className='flex justify-start mb-6'>
            <p
              className='
              paragraph
              font-serif font-light
              text-sm text-white
              lg:w-11/12
              xl:w-9/12
            '
            >
              We are one of the leading companies that has made automation of We are one of the
              leading companies
            </p>
          </div>
          <div className='w-full flex justify-start font-serif font-light text-sm'>
            <p className='ch-footer-paragraph'>© 2021 Name + Name. All rights reserved</p>
          </div>
        </div>
        <div
          className='
          flex flex-col
          md:justify-center
          xl:justify-center
          md:items-center md:pt-12
          xl:pt-20
          lg:w-6/12
        '
        >
          <div
            className='
            w-1/2
            md:w-full
            my-2
            xl:my-0 xl:mb-3 xl:mt-3
            flex
            justify-start
          '
          >
            <h1 className='font-serif text-white font-semibold text-sm lg:text-base'>
              Quick Access
            </h1>
          </div>
          <div className='w-full flex justify-start mb-6'>
            <ul className='flex flex-col items-center justify-start'>
              <li
                onClick={() => onNavButtonClick('workingProcessSection')}
                className='
                text-white
                font-serif font-normal
                text-sm
                pl-1
                mb-1
                cursor-pointer
              '
              >
                Working Process
              </li>
              <li
                onClick={() => onNavButtonClick('ourMissionSection')}
                className='
                text-white
                font-serif font-normal
                text-sm
                pr-6
                mb-1
                cursor-pointer
              '
              >
                Our Mission
              </li>
              <li
                className='
                text-white
                font-serif font-normal
                text-sm
                mb-1
                cursor-pointer
              '
              >
                News & Articles
              </li>
              <li
                className='
                  flex
                  justify-start
                  text-white text-left
                  font-serif font-normal
                  text-sm
                  pr-7
                  cursor-pointer
                '
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col lg:justify-center lg:pt-0 xl:pt-5'>
          <div className='w-1/2 ml-1 my-2 xl:-mt-2 flex justify-start'>
            <h1 className='font-serif text-white font-semibold text-sm lg:text-base'>Newsletter</h1>
          </div>
          <form className=''>
            <div className='ml-1 relative'>
              <input
                placeholder='Email Address'
                className='
                font-serif font-normal
                text-sm text-black
                pl-4
                flex
                justify-start
                w-full
                sm:w-6/12
                md:w-11/12
                lg:w-full
                h-9
                rounded-lg
                bg-white
                border border-slate-300 border-solid
                mb-2
                focus:outline-none
              '
                type='name'
              />
              <CaretRight className='absolute right-0 top-0' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
