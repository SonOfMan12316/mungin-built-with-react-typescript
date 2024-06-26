import React from 'react';
import Navigation from '../../components/layouts/Navigation';
import backgroundImage from '../../assets/images/hero-bg.png';
import { Leaf } from '../../components/icons';

interface HeroProps {
  onNavButtonClick: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavButtonClick }) => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  return (
    <div style={containerStyle} className='bg-cover bg-center h-screen  bg-no-repeat'>
      <Navigation onNavButtonClick={onNavButtonClick} />
      <div className='px-6 md:px-10 lg:px-16 xl:px-32 mt-20 flex-grow flex flex-col justify-center items-center'>
        <div className=''>
          <div className='text-xl md:text-3xl xl:text-4xl font-semibold lg:font-bold w-72 md:w-1/2 lg:w-5/12'>
            Growing&nbsp;
            <span className='relative text-ch-primary'>
              <Leaf className='absolute -top-6 left-0' />
              Crop
            </span>
            &nbsp;data for immediate impact.
          </div>
          <div className='mt-4 text-sm md:text-base font-medium sm:w-7/12 lg:w-5/12'>
            At Mungin we transform data to actionable insights that power decision making across the
            agricultural value chain.Delivering innovative Agtech Solutions to improve agricultural
            productivity in Nigeria is our ethos
          </div>
        </div>
        {/* <div class="flex md:justify-start buttons gap-x-2 md:gap-x-4 mt-4">
          <router-link to="/cropsDatabase">
            <button
              class="
                firstButton
                font-serif font-medium
                text-sm
                md:text-base
                text-white
                flex
                justify-center
                items-center
                h-10
                w-32
                md:w-40
                lg:w-52
                rounded-lg
              "
            >
              Search Our Database
            </button>
          </router-link>
          <router-link to="join-waiting-list">
            <button
              class="
                secButton
                font-serif
                flex
                justify-center
                items-center
                font-medium
                text-sm
                md:text-base
                h-10
                w-32
                md:w-40
                lg:w-52
                rounded-lg
              "
            >
              Join Waiting List
            </button>
          </router-link>
        </div>
        <div class="flex space-x-2 lg:space-x-4">
          <router-link to="login">
            <button
              class="
                firstButton
                mt-2
                font-serif font-medium
                text-sm
                md:text-base
                text-white
                flex
                justify-center
                items-center
                h-10
                w-32
                md:w-40
                lg:w-52
                rounded-lg
              "
            >
              Login
            </button>
          </router-link>
          <router-link to="/cropProfile">
            <button
              class="
                firstButton
                mt-2
                font-serif font-medium
                text-sm
                md:text-base
                text-white
                flex
                justify-center
                items-center
                h-10
                w-32
                md:w-40
                lg:w-52
                rounded-lg
              "
            >
              Crop Profile
            </button>
          </router-link>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
