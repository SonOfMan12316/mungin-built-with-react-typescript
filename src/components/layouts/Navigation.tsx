import React from 'react';
import Logo from '../../assets/images/mungin-logo.png';
import Hamburger from '../icons/Hamburger';
import { Button } from '../ui';
import { useUIStore } from '../../store/ui';
import Sidenav from '../global/Sidenav';
import { useNavigate } from 'react-router-dom';

type NavigationProps = {
  onNavButtonClick: (sectionId: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ onNavButtonClick }) => {
  const { updateSidenavState } = useUIStore((state) => ({
    updateSidenavState: state.updateSidenavState,
  }));
  const navigate = useNavigate();

  return (
    <div className='w-screen'>
      <main className='w-full h-full flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-32 py-8 relative'>
        <div className='cursor-pointer hidden lg:flex items-center h-16'>
          <img className='md:w-32 lg:w-36' src={Logo} alt={'hmm'} />
        </div>
        <div className='nav-links hidden lg:block'>
          <ul className='flex items-center justify-between gap-x-4'>
            {/* <li className='font-serif font-bold text-base mx-6'>Home</li> */}
            <li
              onClick={() => onNavButtonClick('workingProcessSection')}
              className='font-serif font-bold text-base mx-6 cursor-pointer'
            >
              Process
            </li>
            <li
              onClick={() => onNavButtonClick('ourMissionSection')}
              className='font-serif font-bold text-base mx-6 cursor-pointer'
            >
              Our mission
            </li>
            <li
              onClick={() => navigate('/join-our-waiting-list')}
              className=' font-serif font-bold text-base mx-6 cursor-pointer'
            >
              Join Us
            </li>
            <li
              onClick={() => navigate('/database')}
              className='font-serif font-bold text-base mx-6 '
            >
              Check Our Database
            </li>
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
