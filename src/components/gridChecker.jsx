import React from 'react';
import styled from 'styled-components';
import { GridContext } from './gridContext';

const GridContainer = styled.div`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  width: calc(100% - 40px);
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 20px;
  column-gap: 24px;
  z-index: 1000000;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const GridItem = styled.div`
  background: rgba(255, 0, 0, 0.1);
`;

const GridChecker = ({ visible }) => {
  const columns = React.useContext(GridContext);
  const gridItemArr = [];
  for (let i = 0; i < columns; i++) {
    gridItemArr.push(i);
  }
  return (
    <GridContainer visible={visible}>
      {gridItemArr.map((item) => {
        return <GridItem key={item} />;
      })}
    </GridContainer>
  );
};

export default GridChecker;
