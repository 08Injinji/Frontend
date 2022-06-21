import React from 'react';
import PcGnb from './PcGnb';
import MobileGnb from './MobileGnb';

import {
  BigPcRender,
  PcRender,
  MobileRender,
  TabletRender,
} from '../responsive';

const Gnb = () => {
  return (
    <>
      <BigPcRender>
        <PcGnb />
      </BigPcRender>
      <PcRender>
        <PcGnb />
      </PcRender>
      <TabletRender>
        <MobileGnb />
      </TabletRender>
      <MobileRender>
        <MobileGnb />
      </MobileRender>
    </>
  );
};

export default Gnb;
