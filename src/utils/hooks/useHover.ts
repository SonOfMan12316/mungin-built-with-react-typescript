import { useState } from 'react';

type HoverState = boolean[];
type HoverActions = {
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
};

const useHoverState = (initialState: boolean[] = []): [HoverState, HoverActions] => {
  const [hoveredItem, setHoveredItem] = useState<HoverState>(initialState);

  const handleMouseEnter = (index: number) => {
    setHoveredItem((prevHoveredItem) => {
      const currentHoveredItem = [...prevHoveredItem];
      currentHoveredItem[index] = true;
      return currentHoveredItem;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredItem((prevHoveredItem) => {
      const currentHoveredItem = [...prevHoveredItem];
      currentHoveredItem[index] = false;
      return currentHoveredItem;
    });
  };

  //   return [hoveredItem, { handleMouseEnter, handleMouseLeave }];
  return [hoveredItem, { handleMouseEnter, handleMouseLeave }];
};

export default useHoverState;
