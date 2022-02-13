import React from 'react';
import styled from 'styled-components';
import mainliner from '../components/linerwhite.webp';
import grayBox from '../components/Rectangle.png';
import { useParams } from 'react-router-dom';

const ProductMenu = styled.div`
  display: flex;
  width: 100vw;
  height: 7vh;
  margin: 0;
  padding: 10 0;
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
  height: 70vh;
  align-items: center;
  /* justify-content: center; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    left: 8.54vw;
    bottom: -30vh;
    height: 1px;
    width: 82.91vw;
    border-bottom: 1px solid #bcbcbc;
  }
`;

const Description = styled.div`
  width: 82.92vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 50vh auto;
  gap: 25vh;
`;

const MainSocks = styled.img`
  alt: 'linerwhite';
  margin: 0 0 12vh 0;
  width: 90vw;
  overflow: hidden;
`;

const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  overflow: hidden;
`;

const Product = () => {
  let { item } = useParams();

  return (
    <>
      <ProductMenu>
        <ProductName name="liner" params={item}>
          라이너
        </ProductName>
        <ProductName name="minicrew" params={item}>
          미니크루
        </ProductName>
        <ProductName name="crew" params={item}>
          크루
        </ProductName>
        <ProductName name="trailer" params={item}>
          트레일러
        </ProductName>
        <ProductName name="ecowool" params={item}>
          에코울
        </ProductName>
      </ProductMenu>
      <SocksContainer>
        <div>{item}</div>
        <ul
          style={{
            listStyle: 'none',
            margin: '20vh 0 0 8.54vw',
          }}
        >
          <li style={{ fontWeight: 'bolder', fontSize: '1.5vw' }}>
            라이너 Liner.
          </li>
          <li
            style={{
              width: '25vw',
              fontSize: '0.8vw',
              color: '#666666',
              marginTop: '2vw',
            }}
          >
            인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지 양말
            설명인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지 양말
            설명 설명따리 설명따
          </li>
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
        </ul>
        <MainSocks src={mainliner} />
      </SocksContainer>
      <Description>
        <SubSocks src={grayBox} />
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          <li
            style={{
              fontSize: '1.5vw',
              fontWeight: 'bolder',
              borderLeft: '8px solid #D6ECE9',
            }}
          >
            &nbsp;부드러운 양말
          </li>
          <li
            style={{
              fontSize: '0.8vw',
              width: '25vw',
              marginTop: '3vh',
            }}
          >
            바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
            그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
            같으며, 행복스럽고 가는 굳세게 것이다.
          </li>
        </ul>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          <li
            style={{
              fontSize: '1.5vw',
              fontWeight: 'bolder',
              borderLeft: '8px solid #D6ECE9',
            }}
          >
            &nbsp;다양한 색상
          </li>
          <li
            style={{
              fontSize: '0.8vw',
              width: '25vw',
              marginTop: '3vh',
            }}
          >
            바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
            그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
            같으며, 행복스럽고 가는 굳세게 것이다.
          </li>
        </ul>
        <SubSocks src={grayBox} />
        <SubSocks src={grayBox} />
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          <li
            style={{
              fontSize: '1.5vw',
              fontWeight: 'bolder',
              borderLeft: '8px solid #D6ECE9',
            }}
          >
            &nbsp;국내 생산
          </li>
          <li
            style={{
              fontSize: '0.8vw',
              width: '25vw',
              marginTop: '3vh',
            }}
          >
            바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
            그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
            같으며, 행복스럽고 가는 굳세게 것이다.
          </li>
        </ul>
      </Description>
    </>
  );
};

export default Product;
