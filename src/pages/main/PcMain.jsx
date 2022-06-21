import { blue, red } from '@mui/material/colors';
import React from 'react';
import styled from 'styled-components';

import newLinerWhite from '../../images/main/New-Liner-White-870W.webp';
import runnerCrew from '../../images/main/Runner-Crew-1400W.webp';

const AreaDiv = styled.div`
  display: block;
  position: relative;
  margin-top: ${(props) => props.marginTop};
  /* justify-content: center; */
  width: 100%;
  height: ${(props) => props.height ?? '700px'};
  background-color: #efefef;
`;

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 0px 20px 0px 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: dense; //그리드 요소 순서 상관 없이 정확히 배치
  gap: 24px;
`;

const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.color ?? '#111'};
`;

const ContentBody = styled.div`
  font-size: 25px;
  color: ${(props) => props.color ?? '#666'};
  margin-top: 20px;
`;

const ShopLink = styled.div`
  font-size: 22px;
  margin-top: 50px;
  color: ${(props) => props.color ?? 'black'};
`;

const ProductName = styled.div`
  font-size: 22px;
  color: ${(props) => props.color ?? 'black'};
`;

const ProductPrice = styled.div`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  color: ${(props) => props.color ?? 'black'};
`;

const Liner = (props) => {
  return (
    <>
      <AreaDiv>
        <GridContainer>
          <div
            style={{
              gridColumnStart: 3,
              gridColumnEnd: 6,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                display: 'inline-block',
                bottom: '100px',
              }}
            >
              <ContentTitle>발을 위한 양말</ContentTitle>
              <ContentBody>
                신발 속에 갇혀 있는
                <br />
                당신의 발을 위한
                <br />
                최고의 선택.
              </ContentBody>
              <ShopLink>
                <a
                  href="https://smartstore.naver.com/injinji/category/84e427f2aab44a81a83720d25bb6fb12?cp=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  자세히 알아보기 &gt;
                </a>
              </ShopLink>
            </div>
          </div>
          <div
            style={{
              gridColumnStart: 6,
              gridColumnEnd: 13,
              position: 'relative',
            }}
          >
            <img
              src={newLinerWhite}
              alt="라이너"
              style={{
                position: 'absolute',
                marginTop: '70px',
                width: '870px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '20px',
                textAlign: 'right',
              }}
            >
              <ProductName>NEW Liner</ProductName>
              <ProductPrice>9,500 ₩</ProductPrice>
            </div>
          </div>
        </GridContainer>
      </AreaDiv>
    </>
  );
};

const Runner = (props) => {
  return (
    <>
      <AreaDiv marginTop="200px">
        <img src={runnerCrew} alt="러너크루" style={{ position: 'absolute' }} />
        <GridContainer>
          <div
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 5,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                display: 'inline-block',
                bottom: '50px',
                right: '0px',
              }}
            >
              <ContentTitle color="white">당신의 페이스 메이커</ContentTitle>
              <ContentBody color="white">
                자연스러운 움직임과
                <br />
                빠른 수분 배출.
                <br />
                오랜 시간 유지되는 최상의 컨디션
              </ContentBody>
              <ShopLink color="white">
                <a
                  href="https://smartstore.naver.com/injinji/search?q=runner"
                  target="_blank"
                  rel="noreferrer"
                >
                  자세히 알아보기 &gt;
                </a>
              </ShopLink>
            </div>
          </div>
          <div
            style={{
              gridColumnStart: 11,
              gridColumnEnd: 13,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: '20px',
                textAlign: 'right',
              }}
            >
              <ProductName color="white">Runner Crew</ProductName>
              <ProductPrice color="white">14,900 ₩</ProductPrice>
            </div>
          </div>
        </GridContainer>
      </AreaDiv>
    </>
  );
};

const Trailer = (props) => {
  return (
    <>
      <AreaDiv marginTop="500px" height="900px" backgroundColor="darkgreen">
        <div
          style={{
            position: 'absolute',
            width: '100%',
            bottom: '140px',
            textAlign: 'center',
          }}
        >
          <ContentTitle>눈 앞의 장애물에만 집중</ContentTitle>
          <ContentBody>
            푹신하고 쾌적한 착용감으로
            <br />
            발이 신경쓰이지 않도록.
          </ContentBody>
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
        <GridContainer height="900px" r>
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
            {/* <div
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
            ></div> */}
          </div>
          <div
            style={{
              gridColumn: '8/13',
              height: '748px',
              position: 'relative',
              top: '23px',
            }}
          >
            {/* <div
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
            ></div> */}
          </div>
        </GridContainer>
      </AreaDiv>
    </>
  );
};

const PcMain = () => {
  // const getRandomIndex = (length) => {
  //   return parseInt(Math.random() * length);
  // };

  // const imgUrl = require('../images/Liner-' +
  //   `${socksList[getRandomIndex(socksList.length)][0].url}` +
  //   '.png');

  return (
    <>
      <div
        style={{
          display: 'block',
          backgroundColor: 'red',
        }}
      >
        PC
      </div>
      <Liner />
      <Runner />
      {/* <Trailer /> */}
    </>
  );
};

export default PcMain;
