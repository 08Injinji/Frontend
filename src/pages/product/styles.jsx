import styled from 'styled-components';

export const ProductMenu = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  width: 100vw;
  height: 55px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #efefef;
`;

export const ProductName = styled.h5`
  color: #666666;
  font-size: 18px;
  font-weight: ${(props) =>
    props.title === props.params ? 'bolder' : 'normal'};
  transition: color 0.2s ease-in-out;
  z-index: 10;
  color: ${(props) => (props.title === props.params ? '#000' : '#666')};
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const SocksContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 110px);
  align-items: center;
  /* overflow: auto; */
  /* padding-bottom: 10vh; */
  margin: 0;
  box-sizing: border-box;
  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #bcbcbc;
  } */
  @media ${({ theme }) => theme.device.mobile} {
    height: 80vh;
    display: flex;
    flex-direction: column-reverse;
    &:after {
      bottom: -10vh;
    }
  }
`;

export const MainDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    overflow: hidden;
  }
`;

export const MainSocks = styled.img`
  alt: 'linerwhite';
  width: ${(props) => props.width};
  /* margin-top: 50px; */
  @media ${({ theme }) => theme.device.mobile} {
    width: ${(props) => props.mwidth};
  }
`;

export const ColorBtn = styled.button`
  position: absolute;
  border: 2px solid #ccc;
  left: 50vw;
  bottom: ${(props) => props.bottom};
  border-radius: 60px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: ${(props) => props.background};
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:focus {
    border: 3px solid #ccc;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 90vw;
  }
`;

export const ColorBtn2 = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #ccc;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  bottom: ${(props) => props.bottom};
  background: ${(props) => props.background};
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:focus {
    border: 3px solid #ccc;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 90vw;
  }
`;

export const UL1 = styled.ul`
  list-style: none;
  margin: 200px 0 0 0;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

export const LI1 = styled.li`
  font-weight: regular;
  font-size: 100px;
  font-family: 'Arimo', sans-serif;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3.2rem;
    padding-bottom: 15px;
  }
`;

export const Description = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 5vh 0 15vh;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
    /* gap: 40px; */
    margin: 10vh 0;
  }
`;

export const DescriptionDiv2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: normal;
  }
`;

export const DescUL = styled.ul`
  list-style: none;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 20px;
  }
`;

export const DescLI = styled.li`
  font-size: 1.5rem;
  font-weight: bolder;
  border-left: 8px solid #d6ece9;
`;

export const DescLI2 = styled.li`
  font-size: 0.8rem;
  line-height: 1.5;
  font-weight: 600;
  color: #6e6e73;
  letter-spacing: -0.022em;
  width: 250px;
  margin-top: 3vh;
`;

export const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0 20px;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`;
