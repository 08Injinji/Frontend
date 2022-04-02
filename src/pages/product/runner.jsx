import React from 'react';
import Media from 'react-media';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperstyle.css';
import {
  SocksContainer,
  MainSocks,
  ColorBtn2,
  UL1,
  LI1,
  Description,
  DescriptionDiv,
  GridContainer,
} from './styles';
import crewwhite from '../../images/Crew-White.png';
import crewblack from '../../images/Crew-Black.png';
import crewsand from '../../images/Crew-Sand.png';
import minicrewwhite from '../../images/MiniCrew-White.png';
import minicrewblack from '../../images/MiniCrew-Black.png';
import minicrewsand from '../../images/MiniCrew-Sand.png';
import runnergrass from '../../images/runnergrass.png';
import runnergrass2 from '../../images/runnergrass2.png';
import runnergrass3 from '../../images/runnergrass3.png';
import runnergrass4 from '../../images/runnergrass4.png';
import runnergrass5 from '../../images/runnergrass5.png';
import runnergrass6 from '../../images/runnergrass6.png';
import runnergrass7 from '../../images/runnergrass7.png';
import runnergrass8 from '../../images/runnergrass8.png';
import runnergrass9 from '../../images/runnergrass9.png';
import strap2 from '../../images/3ply.png';
import coolmaxLogo from '../../images/coolmax-logo-removebg-preview.png';
import coolmaxDescImage from '../../images/coolmax2.png';
import flag from '../../images/태극기.png';

const Runner = ({ active, setActive }) => {
  return (
    <>
      <Media queries={{ small: { maxWidth: 768 } }}>
        {(matches) =>
          matches.small ? (
            <>
              <UL1>
                <LI1>Runner</LI1>
                <a
                  href="https://smartstore.naver.com/injinji"
                  style={{
                    display: 'inline-block',
                    width: '25vw',
                    fontSize: '0.8rem',
                    fontWeight: 'bolder',
                    marginTop: '2vw',
                  }}
                >
                  구매하러 가기 &gt;
                </a>
              </UL1>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                onUpdate={(swiper) => swiper.slideTo(0, false)}
              >
                <SwiperSlide>
                  <img className="crew" alt=" " src={crewwhite} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="crew" alt=" " src={crewblack} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="crew" alt=" " src={crewsand} />
                </SwiperSlide>
              </Swiper>
            </>
          ) : (
            <SocksContainer>
              <GridContainer>
                {active === 'WhiteSocks' && (
                  <>
                    <div
                      style={{
                        display: 'grid',
                        alignItems: 'end',
                        position: 'relative',
                        gridColumnStart: 3,
                        gridColumnEnd: 7,
                        minHeight: '100%',
                        height: '580px',
                      }}
                    >
                      <MainSocks width="500px" mwidth="100%" src={crewwhite} />
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        alignItems: 'end',
                        position: 'relative',
                        gridColumnStart: 7,
                        gridColumnEnd: 12,
                        minHeight: '100%',
                        height: '580px',
                      }}
                    >
                      <MainSocks
                        width="450px"
                        mwidth="100%"
                        src={minicrewwhite}
                      />
                    </div>
                  </>
                )}
                {active === 'BlackSocks' && (
                  <>
                    <div
                      style={{
                        display: 'grid',
                        alignItems: 'end',
                        position: 'relative',
                        gridColumnStart: 3,
                        gridColumnEnd: 7,
                        minHeight: '100%',
                        height: '580px',
                      }}
                    >
                      <MainSocks width="500px" mwidth="100%" src={crewblack} />
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        alignItems: 'end',
                        position: 'relative',
                        gridColumnStart: 7,
                        gridColumnEnd: 12,
                        minHeight: '100%',
                        height: '580px',
                      }}
                    >
                      <MainSocks
                        width="450px"
                        mwidth="100%"
                        src={minicrewblack}
                      />
                    </div>
                  </>
                )}
                {active === 'GraySocks' && (
                  <>
                    <div
                      style={{
                        display: 'grid',
                        alignItems: 'end',
                        position: 'relative',
                        gridColumnStart: 3,
                        gridColumnEnd: 7,
                        minHeight: '100%',
                        height: '580px',
                      }}
                    >
                      <MainSocks width="500px" mwidth="100%" src={crewsand} />
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        alignItems: 'end',
                        position: 'relative',
                        gridColumnStart: 7,
                        gridColumnEnd: 12,
                        minHeight: '100%',
                        height: '580px',
                      }}
                    >
                      <MainSocks
                        width="450px"
                        mwidth="100%"
                        src={minicrewsand}
                      />
                    </div>
                  </>
                )}
                <div
                  style={{
                    position: 'relative',
                    gridColumnStart: 12,
                    gridColumnEnd: 13,
                    display: 'grid',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '150px',
                    }}
                  >
                    <ColorBtn2
                      background="#fff"
                      onClick={() => setActive('WhiteSocks')}
                    />
                    <ColorBtn2
                      background="#000000"
                      onClick={() => setActive('BlackSocks')}
                    />
                    <ColorBtn2
                      background="#c2b280"
                      onClick={() => setActive('GraySocks')}
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: 'relative',
                    gridColumnStart: 1,
                    gridColumnEnd: 7,
                    display: 'grid',
                    alignItems: 'center',
                  }}
                >
                  <UL1 style={{ marginTop: '0', textAlign: 'center' }}>
                    <LI1 style={{ fontSize: '35px' }}>Runner</LI1>
                    <LI1
                      style={{
                        fontSize: '80px',
                        fontWeight: 'bolder',
                      }}
                    >
                      Crew
                    </LI1>
                  </UL1>
                </div>
                <div
                  style={{
                    position: 'relative',
                    gridColumnStart: 7,
                    gridColumnEnd: 13,
                    display: 'grid',
                    alignItems: 'center',
                  }}
                >
                  <UL1 style={{ marginTop: '0', textAlign: 'center' }}>
                    <LI1 style={{ fontSize: '35px' }}>Runner</LI1>
                    <LI1
                      style={{
                        fontSize: '80px',
                        fontWeight: 'bolder',
                      }}
                    >
                      Mini-Crew
                    </LI1>
                  </UL1>
                </div>
                <div
                  style={{
                    position: 'relative',
                    gridColumnStart: 1,
                    gridColumnEnd: 13,
                    zIndex: '99',
                    display: 'grid',
                    justifyContent: 'center',
                  }}
                >
                  <a
                    href="https://smartstore.naver.com/injinji"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: '22px',
                      fontWeight: 'normal',

                      marginTop: '20px',
                      marginBottom: '100px',
                    }}
                  >
                    구매하러 가기 &gt;
                  </a>
                </div>
              </GridContainer>
            </SocksContainer>
          )
        }
      </Media>

      <Description>
        <DescriptionDiv>
          <div
            style={{
              flex: 1,
              display: 'flex',
              width: '100%',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: '30px',
              lineHeight: '50px',
              color: '#000000',
              left: 0,
              marginTop: '400px',
              padding: '450px 0',
            }}
          >
            <div
              style={{
                background: '#EDF3EA',
                position: 'absolute',
                width: '100vw',
                top: 0,
                height: '100%',
              }}
            ></div>
            <div style={{ zIndex: 0 }}>
              오랜시간
              <br />
              상쾌하고 편안하게
              <br />
              운동을 즐기고 싶으신가요?
            </div>
          </div>
        </DescriptionDiv>
        <DescriptionDiv
          style={{
            position: 'relative',
            width: '100vw',
            marginTop: '450px',
          }}
        >
          <GridContainer style={{ alignItems: 'center' }}>
            <div
              style={{
                gridColumnStart: 2,
                gridColumnEnd: 7,
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '31px' }}>
                <span style={{ fontSize: '60px' }}>Runner</span>
              </div>
              <div style={{ fontSize: '25px', lineHeight: '50px' }}>
                스포츠 활동을 위해 제작한
                <br />
                러너는
                <br />
                마라톤부터 가벼운 조깅까지
                <br />
                활동적이며 열정적인 당신을 위한 제품입니다.
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                gridColumnStart: 7,
                gridColumnEnd: 13,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  left: 0,
                  marginTop: '235px',
                  width: '50vw',
                  height: '647px',
                  backgroundImage: `url('${runnergrass}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left center',
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv>
          <div
            style={{
              flex: 1,
              display: 'flex',
              width: '100%',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              left: 0,
              marginTop: '400px',
              padding: '450px 0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '95vw',
                backgroundImage: `url('${runnergrass2}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                height: '100%',
              }}
            ></div>
          </div>
        </DescriptionDiv>
        <DescriptionDiv
          style={{
            width: '100%',
            marginTop: '450px',
            marginBottom: '305px',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <GridContainer>
            <div
              style={{
                gridColumnStart: 3,
                gridColumnEnd: 8,
              }}
            >
              <MainSocks width="700px" mwidth="100%" src={crewwhite} />
            </div>
            <div
              style={{
                gridColumnStart: 8,
                gridColumnEnd: 13,
              }}
            >
              <div
                style={{
                  fontSize: '25px',
                  lineHeight: '50px',
                  marginTop: '150px',
                }}
              >
                발목위로 길게 올라와
                <br />
                거친 활동에도
                <br />
                안정적으로 잡아주는
                <br />
                Crew.
              </div>
            </div>
            <div
              style={{
                gridColumnStart: 4,
                gridColumnEnd: 6,
              }}
            >
              <div
                style={{
                  fontSize: '25px',
                  lineHeight: '50px',
                  marginTop: '150px',
                  width: '101%',
                }}
              >
                부담스럽지 않고
                <br />
                편안하게 착용 가능한
                <br />
                Mini-Crew.
              </div>
            </div>
            <div
              style={{
                gridColumnStart: 6,
                gridColumnEnd: 13,
              }}
            >
              <MainSocks
                width="730px"
                mwidth="100%"
                src={minicrewwhite}
                style={{ transform: 'translateY(-100px)' }}
              />
            </div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv style={{ marginBottom: '300px' }}>
          <GridContainer>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 10,
                height: '674px',
                backgroundImage: `url('${runnergrass3}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                marginTop: '208px',
                gridColumnStart: 5,
                gridColumnEnd: 12,
                height: '517px',
                backgroundImage: `url('${runnergrass4}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv>
          <div
            style={{
              flex: 1,
              display: 'flex',
              width: '100%',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              left: 0,
              padding: '306px 0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100vw',
                backgroundImage: `url('${strap2}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                height: '100%',
              }}
            ></div>
          </div>
        </DescriptionDiv>
        <DescriptionDiv>
          <GridContainer
            style={{
              position: 'relative',
              alignItems: 'center',
              height: '500px',
            }}
          >
            <div
              style={{
                gridColumnStart: 2,
                gridColumnEnd: 6,
              }}
            >
              <div
                style={{
                  fontSize: '25px',
                  lineHeight: '50px',
                  position: 'absolute',
                  top: '-50px',
                }}
              >
                이너 양말로 제작된 라이너와는 달리
                <br />
                러너는
                <br />
                단독으로 착용하는
                <br />
                스포츠 양말로 제작하였습니다.
              </div>
            </div>
            <div
              style={{
                gridColumnStart: 7,
                gridColumnEnd: 11,
              }}
            >
              <div
                style={{
                  fontSize: '25px',
                  lineHeight: '50px',
                  position: 'absolute',
                  top: '-50px',
                }}
              >
                라이너의 부드러움보다는
                <br />
                탄탄한 원사에서 비롯된
                <br />
                안정된 착용감을 느낄 수 있도록
                <br />
                COOLMAX 100% 원사 세 올을 이용하여.
                <br />
                러너를 만들었습니다.
              </div>
            </div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv>
          <GridContainer>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 9,
                height: '597px',
                backgroundImage: `url('${runnergrass5}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv>
          <div style={{ display: 'flex', width: '100%' }}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '150px', paddingLeft: '200px' }}>NST</div>
              <div style={{ fontSize: '35px', paddingLeft: '200px' }}>
                Technology
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '450px 0',
              }}
            >
              <div style={{ fontSize: '25px', lineHeight: '50px' }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                  Non Seam Treatment
                </span>
                는 발을 위해 개발한
                <br />
                Injinji의 무봉제 공법입니다.
                <br />
                발가락부터 발바닥을 거쳐 발목 마감 부분까지
                <br />
                거친 바느질 자국이 없어
                <br />
                상처 발생 가능성을 최소화하였습니다.
              </div>
            </div>
          </div>
        </DescriptionDiv>
        <DescriptionDiv>
          <GridContainer>
            <div
              style={{
                gridColumnStart: 4,
                gridColumnEnd: 12,
                height: '598px',
                marginBottom: '180px',
                backgroundImage: `url('${runnergrass6}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                gridColumnStart: 2,
                gridColumnEnd: 8,
                height: '446px',
                marginBottom: '180px',
                backgroundImage: `url('${runnergrass7}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                gridColumnStart: 5,
                gridColumnEnd: 10,
                height: '368px',
                backgroundImage: `url('${runnergrass8}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv style={{ marginTop: '450px' }}>
          <div
            style={{
              flex: 1,
              backgroundColor: '#FBF8F6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '1815px',
            }}
          >
            <div style={{ fontSize: '40px', textAlign: 'center' }}>
              <img
                style={{ display: 'block', marginBottom: '40px' }}
                src={coolmaxLogo}
                width="436px"
                height="106px"
                alt="coolmax"
              />
              독보적인 수분 관리 능력
            </div>
            <div
              style={{
                fontSize: '25px',
                lineHeight: '50px',
                textAlign: 'center',
                marginTop: '200px',
              }}
            >
              COOLMAX 섬유의 원료인 폴리에스터는 <br />
              스포츠 의류로 많이 사용되지만, <br />
              수분을 밀어내는 성질이 있어
              <br />
              의류 내부에서 발생하는 수분을 <br />
              흡수하지 못합니다.
              <br />
              <br />
              또한, 폴리에스터로 이루어진 원사는
              <br />
              빈 공간이 거의 없어 <br />
              공기 투과가 굉장히 어렵다는 단점도 있죠.
              <br />
              <br />
              이러한 특장을 장점으로 이용하기 위해
              <br />
              Injinji는{' '}
              <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                COOLMAX
              </span>{' '}
              섬유를 선택하였습니다.
            </div>
          </div>
        </DescriptionDiv>
        <DescriptionDiv
          style={{
            position: 'relative',
            justifyContent: 'center',
            color: '#fff',
            height: '1384px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100%',
              backgroundColor: '#363D43',
              top: 0,
              zIndex: -1,
            }}
          ></div>
          <GridContainer>
            <div
              style={{
                gridColumnStart: 2,
                gridColumnEnd: 7,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '25px', lineHeight: '50px' }}>
                한가닥 한가닥이 굉장히 미세한
                <br />
                COOLMAX 섬유는
                <br />
                독특한 형상의{' '}
                <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                  4채널 구조
                </span>
                를 가지고 있습니다.
                <br />
                <br />
                수분이 지나다닐 수 있는 <br />
                4개의 길을 가진 이 미세한 섬유들이 모여
                <br />
                하나의 원사로 만들어지면
                <br />
                원사 내부에 아주 작은 빈 공간들이 생깁니다.
                <br />
                <br />
                이는 수분을 끌어당기는 모세관 현상을 발생시켜
                <br />
                흡습성을 높여주고, <br />
                공기가 잘 드나들 수 있는 길을 만들어
                <br />
                통기성을 높여줍니다.
                <br />
                <br />
                또한, 이 독특한 형상 덕분에
                <br />
                섬유의 표면적이 넓어져
                <br />
                보다 빠른 건조가 가능합니다.
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                gridColumnStart: 7,
                gridColumnEnd: 13,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '50vw',
                  height: '892px',
                  backgroundImage: `url('${coolmaxDescImage}')`,
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv>
          <div
            style={{
              flex: 1,
              display: 'flex',
              width: '100%',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              left: 0,
              marginTop: '400px',
              padding: '450px 0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100vw',
                backgroundImage: `url('${runnergrass9}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                height: '100%',
              }}
            ></div>
          </div>
        </DescriptionDiv>
        <DescriptionDiv style={{ margin: '450px 0' }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img src={flag} alt="flag" />
            <div style={{ marginTop: '80px', fontSize: '25px' }}>
              Injinji의 전 제품은 대한민국에서 생산됩니다.
            </div>
          </div>
        </DescriptionDiv>
      </Description>
    </>
  );
};

export default Runner;
