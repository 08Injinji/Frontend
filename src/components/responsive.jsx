//pc 렌더링을 위한 컴포넌트
import React from 'react';
import { size } from '../pages/theme';
import { useMediaQuery } from 'react-responsive';

const PcRender = ({ children }) => {
  const isPC = useMediaQuery({
    query: `(min-width: ${size.desktop})`,
  });
  return <React.Fragment>{isPC && children}</React.Fragment>;
};

//const TabletRender = () => {};

//mobile 렌더링을 위한 컴포넌트
const MobileRender = ({ children }) => {
  const isMobile = useMediaQuery({
    query: `(min-width: 0px) and (max-width: ${size.tablet})`,
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

export { PcRender, MobileRender };

//해당
