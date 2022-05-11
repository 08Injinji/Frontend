import React from 'react';
import styled from 'styled-components';
import socksList from './admin/socksList';
import ecowool from '../images/에코울.webp';
import crew from '../images/크루.webp';
import trailer1 from '../images/트레일러1.webp';
import trailer2 from '../images/트레일러2.webp';

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

const BuyMent2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: 140px;
  width: 100%;
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
  font-weight: bold;
  font-size: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.3rem;
  }
`;

const MentLI2 = styled.li`
  font-size: 25px;
  font-weight: regular;
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
  font-size: 22px;
  font-weight: 500;
  margin-top: 50px;
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
    font-weight: 500;
    margin-top: 10px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
    transform: translateX(${(props) => props.x});
    right: ${(props) => props.mright};
    left: ${(props) => props.mleft};
    bottom: ${(props) => props.mbottom};
  }
`;

const GridContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 700px;
  margin: 0 20px;
  grid-template-rows: 700px;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`;

const Title = styled.div`
  font-size : 30px;
  font-weight: bold;
  color: #111;
`;

const Body = styled.div`
  font-size: 25px;
  color: #666;
  margin-top: 20px;
`;

const Explanation = (props) => {

  const divStyle = {
    position: props.position,
    bottom: props.bottom,
    right: props.right,
    textAlign: props.textAlign
  };

  return (
    <div style={divStyle}>
      <Title>
        {props.title}
      </Title>
      <Body>
        {props.body}
      </Body>
      {props.children}
    </div>
  );
};




const Main = () => {
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

  const imgUrl = require('../images/Liner-' +
    `${socksList[getRandomIndex(socksList.length)][0].url}` +
    '.png');

  return (
    <>
      <div
        className="liner-area"
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          width: '100%',
          height: '700px',
        }}
      >
        <div
          style={{
            top: 0,
            position: 'absolute',
            backgroundColor: '#efefef',
            width: '100vw',
            height: '100%',
            zIndex: -1,
          }}
        ></div>
        <GridContainer>
          <div
            style={{
              backgroundColor: "blue",
              girdRowStart: 1,
              gridColumnStart: 2,
              gridColumnEnd: 4,
              position: 'relative',
            }}
          >
            <Explanation
              position='absolute'
              bottom='100px'
              title="발을 위한 양말"
              body={["신발 속에 갇혀 있는", < br />, "당신의 발을 위한", < br />, "최고의 선택."]}
            >
              <div style={{ fontSize: '22px', marginTop: '50px' }}>
                <a
                  href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae"
                  target="_blank"
                  rel="noreferrer"
                >
                  자세히 알아보기 &gt;
                </a>
              </div>
            </Explanation>
          </div>
          <div
            style={{
              backgroundColor: "yellow",
              girdRowStart: 1,
              gridColumnStart: 7,
              gridColumnEnd: 13,
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '50vw',
                height: '693px',
                position: 'absolute',
                left: 0,
                bottom: '-100px',
                backgroundImage: `url('${imgUrl}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: '20px',
                textAlign: 'right',
              }}
            >
              <div style={{ fontSize: '22px' }}>Liner</div>
              <div
                style={{ fontSize: '20px', marginTop: '10px', fontWeight: 500 }}
              >
                8,500 ₩
              </div>
            </div>
          </div>
        </GridContainer>
      </div >
      <div
        className="runner-area"
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          width: '100%',
          height: '700px',
          marginTop: '500px',
        }}
      >
        <div
          style={{
            top: 0,
            position: 'absolute',
            backgroundColor: '#efefef',
            width: '100vw',
            height: '100%',
            zIndex: -1,
          }}
        ></div>
        <GridContainer>
          <div
            style={{
              girdRowStart: 1,
              gridColumnStart: 8,
              gridColumnEnd: 12,
              position: 'relative',
            }}
          >
            <Explanation
              position='absolute'
              bottom='100px'
              title='당신의 페이스 메이커'
              right='0px'
              textAlign='right'
              body={['자연스로운 움직임과', <br />, '빠른 수분 배출.', <br />, "오랜 시간 유지되는 최상의 컨디션."]}
            >
              <div style={{ fontSize: '22px', marginTop: '50px' }}>
                <a
                  href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae"
                  target="_blank"
                  rel="noreferrer"
                >
                  자세히 알아보기 &gt;
                </a>
              </div>
            </Explanation>
          </div>

          <div
            style={{
              gridRowStart: 1,
              gridColumnStart: 1,
              gridColumnEnd: 7,
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '900px',
                height: '1100px',
                position: 'absolute',
                left: 0,
                bottom: '-200px',
                backgroundImage: `url('${crew}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'right center',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: '20px',
              }}
            >
              <div style={{ fontSize: '22px' }}>Runner Crew</div>
              <div
                style={{ fontSize: '20px', marginTop: '10px', fontWeight: 500 }}
              >
                14,900 ₩
              </div>
            </div>
          </div>

        </GridContainer>
      </div >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '900px',
          marginTop: '500px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100%',
            backgroundColor: '#efefef',
            zIndex: -1,
          }}
        ></div>
        <GridContainer>
          <div
            style={{
              position: 'absolute',
              right: 0,
              textAlign: 'right',
              bottom: '20px',
            }}
          >
            <div style={{ fontSize: '22px' }}>Trailer</div>
            <div
              style={{ fontSize: '20px', fontWeight: '500', marginTop: '10px' }}
            >
              16,900 ₩
            </div>
          </div>
          <div
            style={{
              gridColumn: '1/4',
              height: '567px',
              position: 'relative',
              top: '265px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '50vw',
                height: '100%',
                right: 0,
                backgroundImage: `url('${trailer1}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'right center',
              }}
            ></div>
          </div>
          <div
            style={{
              gridColumn: '8/13',
              height: '748px',
              position: 'relative',
              top: '23px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '50vw',
                height: '100%',
                left: 0,
                backgroundImage: `url('${trailer2}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'left center',
              }}
            ></div>
          </div>
        </GridContainer>
        <div
          style={{
            position: 'absolute',
            bottom: '140px',
            textAlign: 'center',
          }}
        >
          <Title>
            눈 앞의 장애물에만 집중
          </Title>
          <Body>
            푹신하고 쾌적한 착용감으로
            <br />
            발이 신경쓰이지 않도록.
          </Body>
          <div style={{ fontSize: '22px', fontWeight: 500, marginTop: '50px' }}>
            <a
              href="https://smartstore.naver.com/injinji?n_media=27758&n_query=%EC%9D%B8%EC%A7%84%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000023238471&n_ad=nad-a001-01-000000153475054&n_keyword_id=nkw-a001-01-000004018620719&n_keyword=%EC%9D%B8%EC%A7%84%EC%A7%80&n_campaign_type=1&n_ad_group_type=1&NaPm=ct%3Dkyvlg7jc%7Cci%3D0ze00009hZ5vMdQuM13b%7Ctr%3Dsa%7Chk%3De2fb33bf768da3ff4cad26734b9d81f9d1e1c5fae"
              target="_blank"
              rel="noreferrer"
            >
              자세히 알아보기 &gt;
            </a>
          </div>
        </div>
      </div>
      <SocksContainer
        style={{ marginTop: '500px' }}
        height="900px"
        mheight="700px"
        mflexDirection="column"
      >
        <GrayContainer height="900px" flexwrap="wrap">
          <MainSocks4
            draggable="false"
            width="100%"
            height="900px"
            mwidth="100%"
            mheight="100%"
            src={ecowool}
          />
        </GrayContainer>
        <MainsocksDiv height="100%" display="flex">
          <Price
            bottom="20px"
            mbottom="40px"
            right="0"
            mright="inherit"
            mleft="10vw"
          >
            Eco-Wool
            <br />
            <span>23,900 &#8361;</span>
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
    </>
  );
};

export default Main;
