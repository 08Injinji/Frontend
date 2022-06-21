import React from 'react';
import PcMain from './PcMain';
import MobileMain from './MobileMain';
import BigPcMain from './BigPcMain';
import TabletMain from './TabletMain';

import {
  BigPcRender,
  PcRender,
  MobileRender,
  TabletRender,
} from '../../components/responsive';

const Main = () => {
  return (
    <>
      <BigPcRender>
        <BigPcMain />
      </BigPcRender>
      <PcRender>
        <PcMain />
      </PcRender>
      <TabletRender>
        <TabletMain />
      </TabletRender>
      <MobileRender>
        <MobileMain />
      </MobileRender>
    </>
  );
};

export default Main;
