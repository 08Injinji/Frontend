import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import grayBox from '../components/Rectangle.png';
import white from '../components/라이너 화이트.webp';
import black from '../components/라이너 블랙.webp';
import gray from '../components/라이너 그레이.webp';
import orange from '../components/라이너 오렌지.webp';
import blue from '../components/라이너 블루.webp';

const ProductMenu = styled.div`
  display: flex;
  position: relative;
  top: 6vh;
  width: 100vw;
  height: 6vh;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #efefef;
`;

const ProductName = styled.h5`
  color: #666666;
  transition: color 0.2s ease-in-out;
  z-index: 10;
  color: ${(props) => (props.name === props.params ? '#000' : '#666')};
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const SocksContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: calc(94vh - 55px);
  align-items: center;
  /* overflow: auto; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    left: 8.54vw;
    bottom: -10vh;
    height: 1px;
    width: 82.91vw;
    border-bottom: 1px solid #bcbcbc;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: 80vh;
    display: flex;
    flex-direction: column-reverse;
    &:after {
      bottom: -10vh;
    }
  }
`;

const MainSocks = styled.img`
  alt: 'linerwhite';
  width: 70%;
  position: relative;
  transform: translate(228px, 80px);
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    left: -54vw;
  }
`;

const ColorBtn1 = styled.button`
  position: absolute;
  border: 2px solid #ccc;
  left: 50vw;
  bottom: 20vh;
  border-radius: 60px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #fff;
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

const ColorBtn2 = styled(ColorBtn1)`
  background: #000000;
  bottom: 16vh;
`;

const ColorBtn3 = styled(ColorBtn1)`
  background: #666666;
  bottom: 12vh;
`;

const ColorBtn4 = styled(ColorBtn1)`
  background: #e57d3e;
  bottom: 8vh;
`;

const ColorBtn5 = styled(ColorBtn1)`
  background: #3f80f4;
  bottom: 4vh;
`;

const UL1 = styled.ul`
  list-style: none;
  margin: 20vh 0 0 8.54vw;

  @media ${({ theme }) => theme.device.mobile} {
    left: 23vw;
    margin: 10vh 0 0 0;
    text-align: center;
  }
`;

const LI1 = styled.li`
  font-weight: bolder;
  font-size: 1.5vw;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3.6rem;
  }
`;

const LI2 = styled.li`
  width: 25vw;
  font-size: 0.8vw;
  color: rgb(102, 102, 102);
  margin-top: 2vw;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    font-size: 0.8rem;
    margin-top: 5vw;
  }
`;

// const Description = styled.div`
//   width: 82.92vw;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   margin: 50vh auto;
//   gap: 25vh;
// `;

// const SubSocks = styled.img`
//   alt: 'socks';
//   width: 30vw;
//   height: 30vw;
//   overflow: hidden;
// `;

const Description = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25vh 8.54vw 0;
  gap: 100px;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 40px 0 0;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
    gap: 40px;
  }
`;

const DescriptionDiv2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: normal;
    gap: 40px;
  }
`;

const DescUL = styled.ul`
  list-style: none;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 20px;
  }
`;

const DescLI = styled.li`
  font-size: 1.5rem;
  font-weight: bolder;
  border-left: 8px solid #d6ece9;
`;

const DescLI2 = styled.li`
  font-size: 0.8rem;
  line-height: 1.5;
  font-weight: 600;
  color: #6e6e73;
  letter-spacing: -0.022em;
  width: 250px;
  margin-top: 3vh;
`;

const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const Product = () => {
  let { item } = useParams();
  const [active, setActive] = React.useState('WhiteSocks');
  return (
    <>
      <ProductMenu>
        <ProductName name="liner" params={item}>
          라이너
        </ProductName>
        <ProductName name="runner" params={item}>
          러너
        </ProductName>
        <ProductName name="trailer" params={item}>
          트레일러
        </ProductName>
        <ProductName name="ecowool" params={item}>
          에코울
        </ProductName>
      </ProductMenu>
      <SocksContainer>
        <UL1>
          <LI1>라이너 Liner.</LI1>
          <LI2>
            인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지 양말
            설명인진지 양말 설명
          </LI2>
          <a
            href="/#"
            style={{
              display: 'inline-block',
              width: '25vw',
              fontSize: '0.8vw',
              fontWeight: 'bolder',
              marginTop: '2vw',
            }}
          >
            구매하러 가기 &gt;
          </a>
        </UL1>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            right: '5vw',
          }}
        >
          <ColorBtn1 onClick={() => setActive('WhiteSocks')} />
          <ColorBtn2 onClick={() => setActive('BlackSocks')} />
          <ColorBtn3 onClick={() => setActive('GraySocks')} />
          <ColorBtn4 onClick={() => setActive('OrangeSocks')} />
          <ColorBtn5 onClick={() => setActive('BlueSocks')} />
          {active === 'WhiteSocks' && <MainSocks src={white} />}
          {active === 'BlackSocks' && <MainSocks src={black} />}
          {active === 'GraySocks' && <MainSocks src={gray} />}
          {active === 'OrangeSocks' && <MainSocks src={orange} />}
          {active === 'BlueSocks' && <MainSocks src={blue} />}
        </div>
      </SocksContainer>
      <Description>
        <DescriptionDiv>
          <SubSocks src={grayBox} />
          <DescUL>
            <DescLI>&nbsp;부드러운 양말</DescLI>
            <DescLI2>
              바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
              그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
              같으며, 행복스럽고 가는 굳세게 것이다.
            </DescLI2>
          </DescUL>
        </DescriptionDiv>
        <DescriptionDiv2>
          <DescUL>
            <DescLI>&nbsp;다양한 색상</DescLI>
            <DescLI2>
              바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
              그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
              같으며, 행복스럽고 가는 굳세게 것이다.
            </DescLI2>
          </DescUL>
          <SubSocks src={grayBox} />
        </DescriptionDiv2>
        <DescriptionDiv>
          <SubSocks src={grayBox} />
          <DescUL>
            <DescLI>&nbsp;국내 생산</DescLI>
            <DescLI2>
              바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
              그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
              같으며, 행복스럽고 가는 굳세게 것이다.
            </DescLI2>
          </DescUL>
        </DescriptionDiv>
      </Description>
    </>
  );
};

export default Product;
