import React from 'react';
import styled from 'styled-components';
import mainwebp from '../components/main.webp';
import mainwebp2 from '../components/main2.webp';
import softSocks from '../components/Mask Group.png';
import grayBox from '../components/Rectangle.png';
import socksList from './admin/socksList';

const VideoContainer = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
`;

const Mainimg = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100vh;
  background-image: url(${mainwebp});
  @media ${({ theme }) => theme.device.mobile} {
    background-image: url(${mainwebp2});
  }
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
  background-color: #fff;
  &:after {
    content: '';
    position: absolute;
    left: 8.54vw;
    bottom: -5vh;
    height: 1px;
    width: 82.91vw;
    border-bottom: 1px solid #bcbcbc;
    z-index: 1;
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: 548px;
    &:after {
      bottom: 0;
    }
  }
`;

const GrayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70%;
  position: relative;
  background-color: #efefef;
  @media ${({ theme }) => theme.device.mobile} {
    height: 100%;
    flex-direction: column;
  }
`;

const BuyMent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20vh 0 0 8.54vw;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 48px auto 0 auto;
    align-items: center;
  }
`;

const MentUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

const MentLI = styled.li`
  font-weight: bolder;
  font-size: 1.5rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.3rem;
  }
`;

const MentLI2 = styled.li`
  width: 25vw;
  font-size: 0.9rem;
  color: #666666;
  margin-top: 20px;
  display: inline-block;
  @media ${({ theme }) => theme.device.mobile} {
    width: 320px;
    font-size: 0.8rem;
  }
`;

const MentA = styled.a`
  display: inline-block;
  width: 25vw;
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 3vw;
  z-index: 99;
  @media ${({ theme }) => theme.device.mobile} {
    width: 320px;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const Description = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25vh 8.54vw 0;
  gap: 100px;
  background-color: #fff;
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

const MainsocksDiv = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    width: 100%;
  }
`;

const MainSocks = styled.img`
  alt: 'linerwhite';
  position: relative;
  bottom: -15vh;
  right: -15vw;
  width: 700px;
  overflow: hidden;
  object-fit: cover;
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    bottom: 0;
    width: 100%;
    right: -10vw;
  }
`;

const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  overflow: hidden;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const Main = () => {
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

  const imgUrl = require('../components/라이너 ' +
    `${socksList[getRandomIndex(socksList.length)][0].url}` +
    '.webp');

  React.useEffect(() => {
    console.log(socksList);
    console.log(socksList[1][0].url);
    console.log(imgUrl);
  });

  return (
    <>
      <div
        style={{
          width: '100vw',
          padding: '0',
          margin: '0',
          display: 'block',
        }}
      >
        <VideoContainer>
          <Mainimg />
        </VideoContainer>
        <SocksContainer>
          <GrayContainer>
            <BuyMent>
              <MentUL>
                <MentLI>인진지 양말을 구매하세요.</MentLI>
                <MentLI2>
                  인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지 양말
                  설명인진지 양말 설명 인진지 양말 설명인진지 양말 설명 인진지
                  양말 설명 설명따리 설명따
                </MentLI2>
              </MentUL>
              <MentA
                href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae"
                target="_blank"
              >
                구매하러 가기 &gt;
              </MentA>
            </BuyMent>
            <MainsocksDiv>
              <MainSocks src={imgUrl} alt="socks" />
            </MainsocksDiv>
          </GrayContainer>
        </SocksContainer>
        <Description>
          <DescriptionDiv>
            <SubSocks src={softSocks} />
            <DescUL>
              <DescLI>&nbsp;부드러운 양말</DescLI>
              <DescLI2>
                바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한
                대고, 같으며, 행복스럽고 가는 굳세게 것이다.
              </DescLI2>
            </DescUL>
          </DescriptionDiv>
          <DescriptionDiv2>
            <DescUL>
              <DescLI>&nbsp;다양한 색상</DescLI>
              <DescLI2>
                바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한
                대고, 같으며, 행복스럽고 가는 굳세게 것이다.
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
                그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한
                대고, 같으며, 행복스럽고 가는 굳세게 것이다.
              </DescLI2>
            </DescUL>
          </DescriptionDiv>
        </Description>
      </div>
    </>
  );
};

export default Main;
