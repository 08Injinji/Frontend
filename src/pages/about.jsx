import React from 'react';
import styled from 'styled-components';
import video1 from '../components/surfing.mp4';
import B1 from '../components/B1.webp';
import ceoimage from '../components/ceoimage.webp';
//style.js

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.mobile} {
    min-height: 85vh;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 90vw;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;

  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    width: 100vw;
    top: 0;
  }
`;

const Video = styled.video`
  height: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    width: auto;
    height: 75%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
  }
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
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 5.5em;
    justify-content: start;
    padding-left: 5vw;
  }
`;

const CommentDiv2 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: nowrap;
    gap: 25px;
    padding: 10px 5vw;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: column;
  }
`;

const CommentDiv = styled.div`
  position: relative;
  transform: translate(0%, -150%);
  margin-bottom: -20%;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: -65%;
  }
`;

const Comment2 = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 2em;
  font-family: 'Pretendard';
  font-weight: bolder;
  text-align: center;
  color: #fff;
  margin-top: 0;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.2em;
    text-align: left;
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
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8em;
    line-height: 18px;
    text-align: left;
    padding: 0;
  }
`;

const ImageContainerDiv = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110vh;
  width: 100%;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    height: 100vh;
  }
`;

const ImageContainer = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  @media ${({ theme }) => theme.device.mobile} {
    height: 100%;
  }
`;
const CapaDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    width: 100%;
    bottom: 15%;
    /* transform: translate(-50%, 0%); */
  }
  @media ${({ theme }) => theme.device.desktop} {
    gap: 60px;
  }
`;

const Capabilities = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.2em;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 5vw;
    margin-top: ${(props) => props.marginTop};
    position: relative;
    color: white;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Ch3 = styled.h3`
  text-align: center;
  color: rgb(120 120 120);
  font-size: 1.7em;
  @media ${({ theme }) => theme.device.mobile} {
    color: #fff;
    font-size: 2.7em;
    margin: 43px 0 0 20px;
    text-align: start;
  }
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
  @media ${({ theme }) => theme.device.mobile} {
    background-position: 48% 0px;
  }
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
  font-size: 3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Pretendard';
  font-weight: 900;
  padding-top: 5%;
`;

const CrdText = styled.p`
  font-family: 'Pretendard';
  font-size: 1rem;
  line-height: 1.5;
  margin: 8% 10% 0 10%;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
  }
`;

const Crd = styled.div`
  margin: 0 auto;
  position: relative;
  width: 88%;
  height: 80vh;
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 25px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 30px auto;
  }
`;

const About = () => {
  return (
    <div
      style={{
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
      }}
    >
      <Container>
        <VideoContainer>
          <Video playsInline autoPlay muted loop>
            <source src={video1} type="video/mp4" />
          </Video>
        </VideoContainer>
      </Container>
      <Container>
        <div style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}>
          <CommentDiv>
            <Comment style={{ margin: '0 auto 3%' }}>INJINJI</Comment>
            <CommentDiv2>
              <Comment2>아메리칸 인디언 말로 "우주"를 뜻합니다.</Comment2>
              <Comment3>
                첨단 기능성 소재를 적용하여,<br></br>또 하나의 우주인 우리 몸에
                최상의 컨디션을 유지시키기 위한 최적의 브랜드입니다.<br></br>
                injinji® korea는 첨단 기능성 소재를 바탕으로 신체의 건강과
                기능을 개선하기 위한 의류를 개발합니다.
              </Comment3>
            </CommentDiv2>
          </CommentDiv>
          <ImageContainerDiv>
            <ImageContainer
              src={B1}
              style={{ objectFit: 'cover' }}
              width="100%"
              height="60%"
            />
            <CapaDiv>
              <Ch3>injinji® Korea's CAPABILITIES</Ch3>
              <Capabilities marginTop="60%">
                <p>독보적인 위치</p>
                <p>뛰어난 기능성</p>
                <p>브랜드 가치</p>
              </Capabilities>
              <Capabilities marginTop="20px">
                <p>지속적 발전</p>
                <p>5-toes design</p>
                <p>최적의 능력</p>
              </Capabilities>
            </CapaDiv>
          </ImageContainerDiv>

          <Crd>
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
