import {
  UL1,
  LI1,
  SocksContainer,
  GridContainer,
  MainSocks,
  ColorBtn2,
  Description,
  DescriptionDiv,
} from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Media from 'react-media';
import trailergray from '../../images/Trailer-Gray.png';
import trailerblack from '../../images/Trailer-Black.png';
import trailersand from '../../images/Trailer-Sand.png';
import trailer1 from '../../images/trailer1.png';
import trailer2 from '../../images/Trailer-Sand-Liner.png';
import trailer3 from '../../images/Trailer-Sand-pile.png';
import trailer4 from '../../images/trailer4.png';
import trailer5 from '../../images/trailer5.png';
import trailer6 from '../../images/trailer6.png';
import trailer7 from '../../images/trailer7.png';
import trailer8 from '../../images/trailer8.png';
import coolmaxLogo from '../../images/coolmax-logo-removebg-preview.png';
import coolmaxDescImage from '../../images/coolmax2.png';
import flag from '../../images/태극기.png';

const Trailer = ({ active, setActive }) => {
  return (
    <>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <>
              <UL1>
                <LI1>Trailer</LI1>
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
                  <img className="trailer" alt=" " src={trailergray} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="trailer" alt=" " src={trailerblack} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="trailer" alt=" " src={trailersand} />
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
                        gridColumnEnd: 11,
                        minHeight: '100%',
                        height: '700px',
                      }}
                    >
                      <MainSocks
                        width="828px"
                        mwidth="100%"
                        src={trailergray}
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
                        gridColumnEnd: 11,
                        minHeight: '100%',
                        height: '700px',
                      }}
                    >
                      <MainSocks
                        width="828px"
                        mwidth="100%"
                        src={trailerblack}
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
                        gridColumnEnd: 11,
                        minHeight: '100%',
                        height: '700px',
                      }}
                    >
                      <MainSocks
                        width="828px"
                        mwidth="100%"
                        src={trailersand}
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
                      background="#61646c"
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
                    gridColumnEnd: 13,
                    display: 'grid',
                    alignItems: 'center',
                  }}
                >
                  <UL1 style={{ marginTop: '0', textAlign: 'center' }}>
                    <LI1
                      style={{
                        fontSize: '80px',
                        fontWeight: 'bolder',
                      }}
                    >
                      Trailer
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
              flexDirection: 'column',
              color: '#000000',
              gap: '100px',
              left: 0,
              marginTop: '400px',
              padding: '450px 0',
            }}
          >
            <div
              style={{
                background: '#fff',
                position: 'absolute',
                width: '100vw',
                top: 0,
                height: '100%',
              }}
            ></div>
            <div style={{ zIndex: 0 }}>
              험한 길을 함께하는
              <br />
              푹신하고 뽀송뽀송한 양말
            </div>
            <div style={{ zIndex: 0 }}>
              두 켤레로 착용하는
              <br />
              트레일러가
              <br />
              낯선 길을 편안하게 만들어줍니다.
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
                position: 'relative',
                gridColumnStart: 1,
                gridColumnEnd: 7,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  left: 0,
                  marginTop: '235px',
                  width: '100%',
                  height: '870px',
                  backgroundImage: `url('${trailer1}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                }}
              ></div>
            </div>
            <div
              style={{
                gridColumnStart: 9,
                gridColumnEnd: 12,
              }}
            >
              <div style={{ fontSize: '25px', lineHeight: '50px' }}>
                지금까지 보지 못했던
                <br />
                새로운 구성의 양말.
                <br />
                <br />
                두툼한 만큼
                <br />
                한 걸음 한 걸음을
                <br />
                더욱 가볍게 만들어줍니다.
              </div>
            </div>
          </GridContainer>
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
                position: 'absolute',
                left: '-100px',
                width: '40vw',
                top: '0',
                height: '647px',
                backgroundImage: `url('${trailer2}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                right: '-100px',
                marginTop: '800px',
                width: '50vw',
                top: '0',
                height: '647px',
                backgroundImage: `url('${trailer3}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            ></div>
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
                  marginTop: '170px',
                }}
              >
                NST 공법과 COOLMAX 섬유로 제작된 라이너가
                <br />
                발생 가능한 상처를 최소화하며
                <br />
                발가락 사이사이를 포함한
                <br />발 전체의 수분을 빠르게 배출합니다.
              </div>
              <a
                href="https://smartstore.naver.com/injinji"
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  fontWeight: 'normal',
                  marginTop: '130px',
                }}
              >
                Liner에 대해 알아보기 &gt;
              </a>
            </div>
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
                  marginTop: '450px',
                }}
              >
                COOLMAX 섬유로 제작한 겉 양말이
                <br />
                라이너로부터 배출된 수분을
                <br />
                빠르게 흡수 및 발산시킴과 동시에
                <br />
                푹신한 착용감을 제공하여
                <br />
                오랜 시간 쾌적함을 제공합니다.
              </div>
            </div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv style={{ marginTop: '450px', marginBottom: '300px' }}>
          <GridContainer>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 8,
                height: '522px',
                backgroundImage: `url('${trailer4}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                marginTop: '-57px',
                gridColumnStart: 6,
                gridColumnEnd: 12,
                height: '458px',
                backgroundImage: `url('${trailer5}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                marginTop: '70px',
                gridColumnStart: 2,
                gridColumnEnd: 12,
                height: '750px',
                backgroundImage: `url('${trailer6}')`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 13,
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '25px',
                  lineHeight: '50px',
                  marginTop: '100px',
                  textAlign: 'center',
                }}
              >
                트레일러의 겉 양말은
                <br />
                그 속이 마치 부드러운 수건과 같다는 느낌을 줍니다.
                <br />
                <br />
                이러한 특징은 수건과 같이 수분을 빠르게 흡수해주며,
                <br />
                두툼한 두께 덕에 발의 피로를 최소화 시켜줍니다.
                <br />
                <br />
                수건과 한 가지 다른 점은
                <br />
                COOLMAX 섬유로 제작하여
                <br />더 빠르게 건조된다는 것이죠.
              </div>
            </div>
          </GridContainer>
        </DescriptionDiv>
        <DescriptionDiv style={{ marginTop: '450px' }}>
          <GridContainer>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 13,
                height: '600px',
                backgroundImage: `url('${trailer7}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
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
              marginTop: '450px',
              padding: '450px 0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '90vw',
                backgroundImage: `url('${trailer8}')`,
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

export default Trailer;