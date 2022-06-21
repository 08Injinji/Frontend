//pc 렌더링을 위한 컴포넌트
import React from 'react';
import { size } from '../pages/theme';
import { useMediaQuery } from 'react-responsive';

const BigPcRender = ({ children }) => {
  const isBigPC = useMediaQuery({
    query: `(min-width: 1400px)`,
  });
  return <>{isBigPC && children}</>;
};

const PcRender = ({ children }) => {
  const isPC = useMediaQuery({
    query: `(min-width: 1024px) and (max-width: 1399px)`,
  });
  return <>{isPC && children}</>;
};

const TabletRender = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1023px)',
  });
  return <>{isTablet && children}</>;
};

//mobile 렌더링을 위한 컴포넌트
const MobileRender = ({ children }) => {
  const isMobile = useMediaQuery({
    query: `(min-width: 0px) and (max-width: 768px)`,
  });
  return <>{isMobile && children}</>;
};

export { BigPcRender, PcRender, MobileRender, TabletRender };

//해당
