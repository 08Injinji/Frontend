import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react';
import styled from 'styled-components';
// import {GlobalStyle, Container, VideoContainer, Comment, Comment2, Comment3, ImageContainer, Capabilities, Snip} from "./style";
// import { Crd, CrdHeading, CrdImg, CrdInfo, CrdText} from "./style";
import video1 from '../components/surfing.mp4';
import B1 from '../components/B1.webp';
import ceoimage from '../components/ceoimage.webp';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
// import { motion } from "framer-motion";

//style.js

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
  padding: 0;
  box-sizing: border-box;
`;

const VideoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 90vw;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const Comment = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  font-family: 'Pretendard';
  font-size: 9em;
  font-weight: bold;
  margin-top: 0;
  color: #ffd0dd;
  &:before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    inset: 158px 30% 6px 30%;
    background: #11a53e;
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;

const Comment2 = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 2em;
  font-family: 'Pretendard';
  font-weight: bolder;
  color: #fff;
  margin-top: 0;
  &:before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    inset: 158px 30% 6px 30%;
    background: #11a53e;
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;

const Comment3 = styled.p`
  position: relative;
  font-size: 1.1em;
  font-family: 'Pretendard';
  padding: 0 17% 0 17%;
  line-height: 36px;
  text-align: center;
  color: #fff;
`;

const ImageContainer = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;

const Capabilities = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Pretendard';
  font-size: 1.2em;
`;

const CrdImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-size: cover;
`;

const CrdInfo = styled.div`
  color: white;
  position: relative;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const CrdHeading = styled.h2`
  font-size: 5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Pretendard';
  font-weight: 900;
  padding-top: 5%;
`;

const CrdText = styled.p`
  font-family: 'Pretendard';
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 8% 10% 0 10%;
`;

const Crd = styled.div`
  margin: 0 auto;
  position: relative;
  width: 88%;
  height: 80vh;
`;

const About = () => {
  return (
    <div
      style={{
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        marginBottom: '200px',
      }}
    >
      <Container>
        <VideoContainer>
          <video autoPlay muted loop style={{ width: '100%', height: '100%' }}>
            <source src={video1} type="video/mp4" />
          </video>
        </VideoContainer>
      </Container>
      <Container>
        <div style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}>
          <div
            style={{ position: 'relative', transform: 'translate(0%,-150%)' }}
          >
            <Comment style={{ margin: '0 auto 3%' }}>INJINJI</Comment>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <Comment2>아메리칸 인디언 말로 "우주"를 뜻합니다.</Comment2>
              <Comment3>
                첨단 기능성 소재를 적용하여, 또 하나의 우주인 우리 몸에 최상의
                컨디션을 유지시키기 위한 최적의 브랜드입니다. injinji® korea는
                첨단 기능성 소재를 바탕으로 신체의 건강과 기능을 개선하기 위한
                의류를 개발합니다.
              </Comment3>
            </div>
          </div>
          <div
            style={{
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
              width: '100%',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', width: '88%', height: '80%' }}>
              <ImageContainer
                src={B1}
                style={{ objectFit: 'cover' }}
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div
            style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}
          >
            <div>
              <h3
                style={{
                  textAlign: 'center',
                  color: '#4A5361',
                  fontFamily: 'Pretendard',
                  fontSize: '1.5em',
                }}
              >
                injinji® Korea's CAPABILITIES
              </h3>
            </div>
            <Capabilities>
              <p>독보적인 위치</p>
              <p>뛰어난 기능성</p>
              <p>브랜드 가치</p>
            </Capabilities>
            <Capabilities>
              <p>지속적 발전</p>
              <p>5-toes design</p>
              <p>최적의 능력</p>
            </Capabilities>
          </div>
          <Crd style={{ marginTop: '75px' }}>
            <CrdImg style={{ backgroundImage: `url(${ceoimage})` }}></CrdImg>
            <CrdInfo>
              <CrdHeading>INJINJI's History</CrdHeading>
              <CrdText>
                injinji 는 1998년 처음 미국에서 설립되어 2000년에 MDC 무등
                양말을 시작으로 제품을 출시하였습니다. 그 다음 해 일본 Shimaseki
                co. 에 기술을 전수, 2003년에는 Toe Sock Seamless Technology 관련
                특허를 취득하는 등 브랜드의 기반을 다졌습니다. 2005년, 한국 내
                상표권에 대한 소유권을 취득 후 2008년, 미국 족부 의학협회 (APMA)
                Seal of Acceptance를 취득하였고, 2010년 injinji® korea가 정식
                출범 및 한국 페도틱 협회 Seal of Acceptance를 취득하였습니다.
              </CrdText>
            </CrdInfo>
          </Crd>
        </div>
      </Container>
    </div>
  );
};

export default About;
