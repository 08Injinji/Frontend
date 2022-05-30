import React from 'react';
import styled from 'styled-components';

import LinerBlack from '../../images/new-liner-black-600w.webp';

const AreaDiv = styled.div`
  display: block;
  position: relative;
  margin-top: ${(props) => props.marginTop};
  /* justify-content: center; */
  width: 100%;
  height: ${(props) => props.height ?? '400px'};
  background-color: ${(props) => props.backgroundColor ?? '#efefef'};
`;

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  padding: 0px 20px 0px 20px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: dense; //그리드 요소 순서 상관 없이 정확히 배치
  gap: 16px;
`;

const ContentTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #111;
`;

const ContentBody = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 20px;
`;

const ShopLink = styled.div`
  font-size: 14px;
  margin-top: 50px;
`;

const ProductName = styled.div`
  font-size: 14px;
`;

const ProductPrice = styled.div`
  font-size: 10px;
  margin-top: 5px;
  font-weight: 500;
`;

const Liner = (props) => {
  return (
    <React.Fragment>
      <AreaDiv>
        <GridContainer>
          <div
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
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
              gridColumnStart: 4,
              gridColumnEnd: 6,
              position: 'relative',
            }}
          >
            <img
              src={LinerBlack}
              alt="라이너"
              style={{
                position: 'absolute',
                marginTop: '80px',
                width: '400px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: '20px',
                textAlign: 'right',
              }}
            >
              <ProductName>Liner</ProductName>
              <ProductPrice>8,500 ₩</ProductPrice>
            </div>
          </div>
        </GridContainer>
      </AreaDiv>
    </React.Fragment>
  );
};

const Runner = (props) => {
  return (
    <React.Fragment>
      <AreaDiv marginTop="500px">
        <GridContainer>
          <div
            style={{
              gridColumnStart: 8,
              gridColumnEnd: 12,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                display: 'inline-block',
                bottom: '100px',
                right: '0px',
                textAlign: 'right',
              }}
            >
              <ContentTitle>당신의 페이스 메이커</ContentTitle>
              <ContentBody>
                자연스러운 움직임과
                <br />
                빠른 수분 배출.
                <br />
                오랜 시간 유지되는 최상의 컨디션
              </ContentBody>
              <ShopLink>
                <a
                  href="https://smartstore.naver.com/injinji/search?q=liner"
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
              gridColumnStart: 1,
              gridColumnEnd: 7,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: '20px',
              }}
            >
              <ProductName>Runner Crew</ProductName>
              <ProductPrice>14,900 ₩</ProductPrice>
            </div>
          </div>
        </GridContainer>
      </AreaDiv>
    </React.Fragment>
  );
};

const Trailer = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
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
    <React.Fragment>
      <div style={{ display: 'block', backgroundColor: 'red' }}>PC</div>
      <Liner />
      <Runner />
      {/* <Trailer /> */}
    </React.Fragment>
  );
};

export default PcMain;
