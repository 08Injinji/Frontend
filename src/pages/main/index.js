import React, { Fragment } from 'react';
import PcMain from './PcMain';
import MobileMain from './MobileMain';

import { PcRender, MobileRender } from '../../components/responsive';

const Main = () => {
  return (
    <React.Fragment>
      <PcRender>
        <PcMain />
      </PcRender>
      <MobileRender>
        <MobileMain />
      </MobileRender>
    </React.Fragment>
  );
};

export default Main;
