import React from 'react';
import styled from 'styled-components';
import mainwebp from '../components/main.webp';
import mainliner from '../components/linerwhite.webp';
import softSocks from '../components/Mask Group.png';
import grayBox from '../components/Rectangle.png';

const VideoContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 55px);
`;

const Mainimg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SocksContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    left: 8.54vw;
    bottom: -5vh;
    height: 1px;
    width: 82.91vw;
    border-bottom: 1px solid #bcbcbc;
  }
`;

const GrayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70%;
  position: relative;
  bottom: 1vh;
  background-color: #efefef;
  z-index: -10;
`;

const Description = styled.div`
  width: 82.92vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 25vh auto;
  gap: 25vh;
`;

const MainSocks = styled.img`
  alt: 'linerwhite';
  margin: 0 0 12vh 7vw;
  width: 80vw;
  overflow: hidden;
`;

const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  overflow: hidden;
`;

const Main = () => {
  return (
    <>
      <div style={{ width: '100vw', padding: '0', margin: '0' }}>
        <VideoContainer>
          <Mainimg src={mainwebp} />
        </VideoContainer>
        <SocksContainer>
          <GrayContainer>
            <ul
              style={{
                listStyle: 'none',
                margin: '20vh 0 0 8.54vw',
              }}
            >
              <li style={{ fontWeight: 'bolder', fontSize: '1.5vw' }}>
                인진지 양말을 구매하세요.
              </li>
              <li
                style={{
                  width: '25vw',
                  fontSize: '0.8vw',
                  color: '#666666',
                  marginTop: '20px',
                }}
              >
                인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지 양말
                설명인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지
                양말 설명 설명따리 설명따
              </li>
              <a
                href="/#"
                style={{
                  display: 'inline-block',
                  width: '25vw',
                  fontSize: '0.8vw',
                  fontWeight: 'bolder',
                  marginTop: '3vw',
                }}
              >
                구매하러 가기 &gt;
              </a>
            </ul>
            <MainSocks src={mainliner} />
          </GrayContainer>
        </SocksContainer>
        <Description>
          <SubSocks src={softSocks} />
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
      </div>
    </>
  );
};

export default Main;
