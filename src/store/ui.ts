import { create } from 'zustand';

type UI = {
  sidenavState: boolean;
  activeNavItem: string;
};

type Actions = {
  updateSidenavState: (state: UI['sidenavState']) => void;
  updateActiveNavItem: (state: UI['activeNavItem']) => void;
};

type UIActions = UI & Actions;

const useUIStore = create<UIActions>()((set) => ({
  sidenavState: false,
  activeNavItem: '',
  updateSidenavState: (state) => set(() => ({ sidenavState: state })),
  updateActiveNavItem: (state) => set(() => ({ activeNavItem: state })),
}));

export { useUIStore };
