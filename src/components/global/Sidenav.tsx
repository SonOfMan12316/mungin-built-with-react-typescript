import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { useUIStore } from '../../store/ui';
import { shallow } from 'zustand/shallow';
import MunginLogo from '../../assets/images/mungin-logo.png';
import { Home, Mission, News, Waiting, CaretDoubleLeft, Signout } from '../icons';
import { Button } from '../ui';

interface NavItem {
  icon: ReactNode | null;
  label: string;
  action?: () => void;
}
const Sidenav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const topNav: Array<NavItem> = [
    {
      icon: <Home />,
      label: 'home',
      action: () => navigate('/'),
    },
    {
      icon: <Mission />,
      label: 'our mission',
      action: () => {
        navigate('/our-mission');
        updateSidenavState(false);
      },
    },
    {
      icon: <News />,
      label: 'news',
      action: () => {
        navigate('/news');
        updateSidenavState(false);
      },
    },
    {
      icon: <Waiting />,
      label: 'join us',
      action: () => {
        navigate('/join-our-waiting-list');
        updateSidenavState(false);
      },
    },
  ];

  const bottomNav: Array<NavItem> = [
    {
      icon: <Signout />,
      label: 'logout',
      action: () => updateSidenavState(false),
    },
  ];

  const { sidenavState, updateSidenavState } = useUIStore(
    (state) => ({ sidenavState: state.sidenavState, updateSidenavState: state.updateSidenavState }),
    shallow,
  );
  const [activeNavItem, setActiveNavItem] = useState<string>(
    location.pathname.split('/')?.filter((part) => part !== '')[0],
  );

  const handleNavClick = (label: string) => {
    setActiveNavItem(label);
  };

  useEffect(() => {
    topNav.forEach((i: NavItem) => {
      if (location.pathname.startsWith(`/${i.label}`)) {
        setActiveNavItem(i.label);
      }
    });
  }, [location]);

  return (
    <div
      className={classnames(
        'bg-green-800 lg:hidden w-[17%] min-w-[17.5rem] h-screen overflow-x-hidden overflow-y-auto absolute top-0 lg:relative lg:ml-0 transition-[margin-left] duration-700 z-20',
        { 'ml-0': sidenavState },
        { '-ml-[100%]': !sidenavState },
      )}
    >
      <div className='w-full h-full py-8 relative'>
        <div className='flex items-center justify-between lg:justify-start ml-7 md:ml-9'>
          <img className='md:w-32 lg:w-36' src={MunginLogo} alt='mungin logo' />
          <Button
            className='lg:hidden mr-2 text-white'
            variant='naked'
            onClick={() => updateSidenavState(false)}
            aria-label='close menu'
          >
            <CaretDoubleLeft />
          </Button>
        </div>
        <nav className='w-full flex flex-col justify-between pt-10'>
          <ul className='w-full flex flex-col space-y-1 pb-10'>
            {topNav?.map((i: NavItem, index: number) => {
              return (
                <li className='capitalize' key={index}>
                  <div
                    className={classnames(
                      'py-3 pl-10 flex cursor-pointer transition-all duration-300 ease-in-out',
                      {
                        'bg-[#E2EDF9]': activeNavItem === i.label,
                      },
                    )}
                    onClick={() => {
                      handleNavClick(i.label);
                      i.action && i.action();
                    }}
                  >
                    <div
                      className={classnames('w-full flex items-center justify-between pr-4', {
                        'text-white': activeNavItem !== i.label,
                        'text-ch-tertiary': activeNavItem === i.label,
                      })}
                    >
                      <div className='flex items-center'>
                        <div className='w-5 flex items-center justify-center'>
                          {i.icon && <>{i.icon}</>}
                        </div>
                        <span className='text-sm md:text-base tracking-[-0.04em] pl-3'>
                          {i.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <ul
                    className={classnames(
                      'ml-[4.5rem] overflow-hidden transition-all duration-500 ease-in-out',
                      {
                        'h-fit pt-0': i.subNav?.length && activeNavItem === i.label,
                        'h-0 overflow-hidden pt-2': !(
                          i.subNav?.length && activeNavItem === i.label
                        ),
                      },
                    )}
                  >
                    {i.subNav?.map((j: SubNavItem, index: number) => {
                      return (
                        <li
                          className='my-2 font-medium transition-all duration-500 ease-in-out cursor-pointer'
                          key={index}
                        >
                          <div
                            onClick={() => {
                              updateSidenavState(false);
                              navigate(`/${j.href}`);
                            }}
                            className={classnames('text-sm text-white', {
                              underline:
                                location.pathname.includes(`/${j.href}`) ||
                                location.pathname === `/${j.href}`,
                            })}
                          >
                            {j.label}
                          </div>
                        </li>
                      );
                    })}
                  </ul> */}
                </li>
              );
            })}
          </ul>
          <ul className='w-full mt-16'>
            {bottomNav?.map((i: NavItem, index: number) => {
              return (
                <li className='capitalize my-1' key={index}>
                  <div
                    className={classnames(
                      'py-3 pl-10 flex cursor-pointer transition-all duration-300 ease-in-out',
                      {
                        'bg-[#E2EDF9]': activeNavItem === i.label,
                      },
                    )}
                    onClick={() => {
                      handleNavClick(i.label);
                      i.action && i.action();
                    }}
                  >
                    <div
                      className={classnames('flex items-center', {
                        'text-white': activeNavItem !== i.label,
                        'text-ch-tertiary': activeNavItem === i.label,
                      })}
                    >
                      <div className='w-5 flex items-center justify-center'>
                        {i.icon && <>{i.icon}</>}
                      </div>
                      <span className='text-sm md:text-base tracking-[-0.04em] pl-3 md:pl-4'>
                        {i.label}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
