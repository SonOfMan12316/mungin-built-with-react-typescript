import React from 'react';
import Logo from '../../assets/images/mungin-logo.png';
import Hamburger from '../icons/Hamburger';
import { Button } from '../ui';
import { useUIStore } from '../../store/ui';
import Sidenav from '../global/Sidenav';

const Navigation: React.FC = () => {
  const { updateSidenavState } = useUIStore((state) => ({
    updateSidenavState: state.updateSidenavState,
  }));

  return (
    <div className='w-screen'>
      <main className='w-full h-full flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-32 py-8 relative'>
        <div className='cursor-pointer hidden lg:flex items-center h-16'>
          <img className='md:w-32 lg:w-36' src={Logo} alt={'hmm'} />
        </div>
        <div className='nav-links w-7/12 hidden lg:block'>
          <ul className='flex items-center'>
            {/* <li className='font-serif font-bold text-base mx-6'>Home</li> */}
            <li className='font-serif font-bold text-base mx-6'>Process</li>
            <li className='font-serif font-bold text-base mx-6 '>Our mission</li>
            <li className='font-serif font-bold text-base mx-6 '>News</li>
            <li className=' font-serif font-bold text-base mx-6 '>Join Waiting List</li>
          </ul>
        </div>
        <Button
          className='lg:hidden'
          onClick={() => {
            updateSidenavState(true);
          }}
          aria-label='menu'
        >
          <Hamburger />
        </Button>
      </main>
      <Sidenav />
    </div>
  );
};

export default Navigation;
