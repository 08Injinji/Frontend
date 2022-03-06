import React from 'react';
import styled from 'styled-components';
// import mainwebp from '../components/main.webp';
// import mainwebp2 from '../components/main2.webp';
import socksList from './admin/socksList';
import ecowool from '../components/에코울.webp';
import crew from '../components/크루.webp';
import trailer1 from '../components/트레일러1.webp';
import trailer2 from '../components/트레일러2.webp';

// const VideoContainer = styled.div`
//   width: 100vw;
//   position: sticky;
//   top: 0;
// `;

// const Mainimg = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 100%;
//   height: 100vh;
//   background-image: url(${mainwebp});
//   @media ${({ theme }) => theme.device.mobile} {
//     background-image: url(${mainwebp2});
//   }
// `;

const SocksContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: #fff; */
  @media ${({ theme }) => theme.device.mobile} {
    height: ${(props) => props.mheight};
    padding-bottom: ${(props) => props.paddingbottom};
    flex-direction: ${(props) => props.mflexDirection};
  }
`;

const GrayContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  flex-wrap: ${(props) => props.flexwrap};
  height: ${(props) => props.height};
  background-color: #efefef;
  z-index: -1;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: ${(props) => props.mheight};
    flex-direction: ${(props) => props.fd};
    margin-left: 0;
    transform: ${(props) => props.transform};
  }
`;

const BuyMent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 200px 0 0 0;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 48px auto 0 auto;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex: 50%;
  }
`;

const BuyMent2 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
    top: ${(props) => props.mtop};
  }
`;

const MentUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: ${(props) => props.textAlign};
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

const MentLI = styled.li`
  font-weight: bolder;
  font-size: 2.7rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.3rem;
  }
`;

const MentLI2 = styled.li`
  font-size: 1.2rem;
  color: #666666;
  margin-top: 20px;
  line-height: 1.6;
  display: inline-block;
  @media ${({ theme }) => theme.device.mobile} {
    width: 320px;
    font-size: 0.8rem;
  }
`;

const MentA = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-top: 20px;
  text-align: ${(props) => props.textAlign};
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const MainsocksDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  /* overflow: hidden; */
  display: ${(props) => props.display};
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex: 50%;
  }
`;

const MainSocks1 = styled.img`
  alt: 'socks';
  position: absolute;
  bottom: 20px;
  right: -173px;
  width: 750px;
  overflow: hidden;
  object-fit: cover;
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    width: 100%;
    left: 29px;
    bottom: -50px;
  }
`;

const MainSocks2 = styled.img`
  alt: 'socks';
  position: absolute;
  bottom: 0;
  left: -258px;
  object-fit: cover;
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    transform: scaleX(-1);
    width: 100%;
    bottom: 0;
    left: 10%;
  }
`;

const MainSocks3 = styled.img`
  alt: 'socks';
  position: relative;
  object-fit: cover;
  width: ${(props) => props.width};
  @media ${({ theme }) => theme.device.mobile} {
    width: ${(props) => props.mwidth};
    position: absolute;
    top: ${(props) => props.mtop};
    bottom: ${(props) => props.mbottom};
    right: ${(props) => props.mright};
    left: ${(props) => props.mleft};
    transform: rotate(${(props) => props.rotate});
  }
`;

const MainSocks4 = styled.img`
  alt: 'socks';
  position: relative;
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media ${({ theme }) => theme.device.mobile} {
    width: ${(props) => props.mwidth};
    height: ${(props) => props.mheight};
    position: absolute;
    top: ${(props) => props.mtop};
    bottom: ${(props) => props.mbottom};
    right: ${(props) => props.mright};
    left: ${(props) => props.mleft};
    transform: rotate(${(props) => props.rotate});
  }
`;

const Price = styled.p`
  position: absolute;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  font-size: 22px;
  z-index: 1;
  > span {
    display: inline-block;
    font-weight: bolder;
    margin-top: 15px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
    transform: translateX(${(props) => props.x});
    right: ${(props) => props.mright};
    left: ${(props) => props.mleft};
    bottom: ${(props) => props.mbottom};
  }
`;

const Main = () => {
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

  const imgUrl = require('../components/라이너 ' +
    `${socksList[getRandomIndex(socksList.length)][0].url}` +
    '.webp');

  return (
    <>
      {/* <VideoContainer>
          <Mainimg />
        </VideoContainer> */}
      <SocksContainer height="850px" mheight="700px" mflexDirection="column">
        <GrayContainer height="700px" mheight="90%" fd="column"></GrayContainer>
        <BuyMent>
          <MentUL>
            <MentLI>발을 위한 양말</MentLI>
            <MentLI2>
              신발 속에 갇혀있는<br></br>당신의 발을 위한<br></br>최고의 선택.
            </MentLI2>
          </MentUL>
          <MentA href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae">
            자세히 알아보기 &gt;
          </MentA>
        </BuyMent>
        <MainsocksDiv height="1000px">
          <MainSocks1 draggable="false" src={imgUrl} alt="socks" />
          <Price bottom="95px" mbottom="170px" right="0" mright="10vw">
            Liner<br></br>
            <span>8,500 &#8361;</span>
          </Price>
        </MainsocksDiv>
      </SocksContainer>
      <SocksContainer
        height="850px"
        mheight="700px"
        mflexDirection="column-reverse"
      >
        <GrayContainer
          height="700px"
          mheight="90%"
          fd="column-reverse"
          transform="translateY(-70px)"
        ></GrayContainer>
        <MainsocksDiv height="1000px">
          <Price
            bottom="95px"
            mbottom="155px"
            left="0"
            mleft="inherit"
            mright="10vw"
          >
            Runner<br></br>Crew <br></br>
            <span>14,900 &#8361;</span>
          </Price>
          <MainSocks2 draggable="false" src={crew} />
        </MainsocksDiv>
        <BuyMent>
          <MentUL textAlign="right">
            <MentLI>당신의 페이스 메이커</MentLI>
            <MentLI2>
              자연스러운 움직임과<br></br>빠른 수분배출.<br></br>오랜 시간
              유지되는 최상의 컨디션.
            </MentLI2>
          </MentUL>
          <MentA
            textAlign="right"
            href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae"
          >
            자세히 알아보기 &gt;
          </MentA>
        </BuyMent>
      </SocksContainer>
      <SocksContainer height="850px" mheight="700px" mflexDirection="column">
        <GrayContainer height="700px" mheight="90%" flexwrap="wrap">
          {' '}
          <MainSocks3
            draggable="false"
            width="30vw"
            mwidth="55vw"
            mtop="2vh"
            mleft="-45px"
            rotate="-26deg"
            src={trailer1}
          />
          <MainSocks3
            draggable="false"
            width="40vw"
            mwidth="70vw"
            mbottom="0"
            mright="0"
            src={trailer2}
          />
        </GrayContainer>
        <MainsocksDiv display="flex">
          <Price
            bottom="95px"
            mbottom="110px"
            right="0"
            mright="inherit"
            mleft="10vw"
          >
            Trailer
            <br />
            <span>16,900 &#8361;</span>
          </Price>
        </MainsocksDiv>
        <BuyMent2 mtop="43%">
          <MentUL>
            <MentLI>눈앞의 장애물에만 집중</MentLI>
            <MentLI2>
              쾌적한 착용감으로<br></br>발이 신경쓰이지 않도록.
            </MentLI2>
          </MentUL>
          <MentA href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae">
            자세히 알아보기 &gt;
          </MentA>
        </BuyMent2>
      </SocksContainer>
      <SocksContainer height="850px" mheight="700px" mflexDirection="column">
        <GrayContainer height="700px" flexwrap="wrap">
          <MainSocks4
            draggable="false"
            width="100%"
            height="700px"
            mwidth="100%"
            mheight="100%"
            src={ecowool}
          />
        </GrayContainer>
        <MainsocksDiv height="100%" display="flex">
          <Price
            bottom="95px"
            mbottom="40px"
            right="0"
            mright="inherit"
            mleft="10vw"
          >
            Eco-Wool
            <br />
            <span>16,900 &#8361;</span>
          </Price>
        </MainsocksDiv>
        <BuyMent2 mtop="58%">
          <MentUL>
            <MentLI>겨울을 더 따뜻하게</MentLI>
            <MentLI2>
              발가락은 부드럽고<br></br>
              발은 포근하게 감싸는<br></br>
              따뜻한 양말.
            </MentLI2>
          </MentUL>
          <MentA
            href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae"
            target="_blank"
          >
            자세히 알아보기 &gt;
          </MentA>
        </BuyMent2>
      </SocksContainer>
      {/* <Description>
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
        </Description> */}
    </>
  );
};

export default Main;
