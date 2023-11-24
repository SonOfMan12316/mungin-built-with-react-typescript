import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { useUIStore } from '../../store/ui';
import { shallow } from 'zustand/shallow';
import MunginLogo from '../../assets/images/mungin-logo.png';
import { Home, Mission, News, Waiting } from '../icons';

interface NavItem {
  icon: ReactNode;
  label: string;
  action?: () => void;
}
const Sidenav: React.FC = () => {
  const Nav: Array<NavItem> = [
    {
      icon: <Home />,
      label: 'home',
      action: () => updateSidenavState(false),
    },
    {
      icon: <Mission />,
      label: 'our mission',
      action: () => updateSidenavState(false),
    },
    {
      icon: <News />,
      label: 'news',
      action: () => updateSidenavState(false),
    },
    {
      icon: <Waiting />,
      label: 'join waiting list',
      action: () => updateSidenavState(false),
    },
  ];

  const { sidenavState, updateSidenavState } = useUIStore(
    (state) => ({ sidenavState: state.sidenavState, updateSidenavState: state.updateSidenavState }),
    shallow,
  );

  return (
    <div
      className={classnames(
        'bg-ch-tertiary w-[17%] min-w-[17.5rem] h-screen overflow-x-hidden overflow-y-auto absolute lg:relative lg:ml-0 transition-[margin-left] duration-700 z-20',
        { 'ml-0': sidenavState },
        { '-ml-[100%]': !sidenavState },
      )}
    >
      <div>dwhbdjew</div>
    </div>
  );
};

export default Sidenav;
