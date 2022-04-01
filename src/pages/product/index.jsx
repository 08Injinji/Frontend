import React, { useState, useRef, useEffect } from 'react';
import Media from 'react-media';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Rellax from 'rellax';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperstyle.css';
import Trailer from './trailer';
import Ecowool from './ecowool';
import {
  ProductName,
  ProductMenu,
  UL1,
  LI1,
  SocksContainer,
  GridContainer,
  MainSocks,
  ColorBtn2,
  Description,
  DescriptionDiv,
} from './styles';
import linerwhite from '../../images/Liner-White.png';
import linerblack from '../../images/Liner-Black.png';
import linergray from '../../images/Liner-Gray.png';
import linerorange from '../../images/Liner-Orange.png';
import linerblue from '../../images/Liner-Blue.png';
import crewwhite from '../../images/Crew-White.png';
import crewblack from '../../images/Crew-Black.png';
import crewsand from '../../images/Crew-Sand.png';
import minicrewwhite from '../../images/MiniCrew-White.png';
import minicrewblack from '../../images/MiniCrew-Black.png';
import minicrewsand from '../../images/MiniCrew-Sand.png';
import orangeImage from '../../images/오렌지-깃털2.jpg';
import grayImage from '../../images/그레이-깃털2.jpg';
import coolmaxLogo from '../../images/coolmax-logo-removebg-preview.png';
// import strap from '../images/strap.png';
import strap from '../../images/2ply.png';
import strap2 from '../../images/3ply.png';
import stacked from '../../images/IMG_0156.jpg';
import blackFeather from '../../images/블랙-깃털2.jpg';
import blueFeather from '../../images/블루-깃털1.jpg';
import whiteFeather from '../../images/화이트-깃털1.png';
import nst from '../../images/NST.jpg';
import coolmaxDescImage from '../../images/coolmax2.png';
import flag from '../../images/태극기.png';
import runnergrass from '../../images/runnergrass.png';
import runnergrass2 from '../../images/runnergrass2.png';
import runnergrass3 from '../../images/runnergrass3.png';
import runnergrass4 from '../../images/runnergrass4.png';
import runnergrass5 from '../../images/runnergrass5.png';
import runnergrass6 from '../../images/runnergrass6.png';
import runnergrass7 from '../../images/runnergrass7.png';
import runnergrass8 from '../../images/runnergrass8.png';
import runnergrass9 from '../../images/runnergrass9.png';

const Product = () => {
  let { item } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState('liner');
  const [active, setActive] = useState('WhiteSocks');
  const rellaxRef = useRef();

  useEffect(() => {
    setActive('WhiteSocks');
    setTitle(pathname.split('/')[2]);
    console.log(orangeImage);
  }, [pathname]);

  useEffect(() => {
    new Rellax(rellaxRef.current, {
      speed: 3,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  const Product = ({ title, name }) => {
    const handleProduct = () => {
      setTitle(title);
      navigate(`/product/${title}`, { replace: true });
    };

    return (
      <ProductName
        params={item}
        name={name}
        title={title}
        onClick={handleProduct}
      >
        {name}
      </ProductName>
    );
  };

  return (
    <>
      <ProductMenu>
        <Product title="liner" name="Liner"></Product>
        <Product title="runner" name="Runner"></Product>
        <Product title="trailer" name="Trailer"></Product>
        <Product title="ecowool" name="Eco-wool"></Product>
      </ProductMenu>
      <div style={{ transform: 'translateY(55px)' }}>
        {
          {
            liner: (
              <>
                <Media queries={{ small: { maxWidth: 768 } }}>
                  {(matches) =>
                    matches.small ? (
                      <>
                        <UL1>
                          <LI1>Liner</LI1>
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
                            <img alt=" " src={linerwhite} />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img alt=" " src={linerblack} />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img alt=" " src={linergray} />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img alt=" " src={linerorange} />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img alt=" " src={linerblue} />
                          </SwiperSlide>
                        </Swiper>
                      </>
                    ) : (
                      <SocksContainer>
                        <GridContainer>
                          <div
                            style={{
                              position: 'relative',
                              gridColumnStart: 3,
                              gridColumnEnd: 5,
                            }}
                          >
                            <UL1>
                              <LI1>Liner</LI1>
                              <a
                                href="https://smartstore.naver.com/injinji"
                                style={{
                                  display: 'inline-block',
                                  fontSize: '22px',
                                  fontWeight: 'normal',
                                  marginTop: '20px',
                                  marginBottom: '100px',
                                }}
                              >
                                구매하러 가기 &gt;
                              </a>
                            </UL1>
                          </div>
                          <div
                            style={{
                              display: 'grid',
                              alignItems: 'center',
                              position: 'relative',
                              gridColumnStart: 5,
                              gridColumnEnd: 11,
                              minHeight: '100%',
                            }}
                          >
                            {active === 'WhiteSocks' && (
                              <MainSocks
                                width="108%"
                                mwidth="100%"
                                src={linerwhite}
                              />
                            )}
                            {active === 'BlackSocks' && (
                              <MainSocks
                                width="108%"
                                mwidth="100%"
                                src={linerblack}
                              />
                            )}
                            {active === 'GraySocks' && (
                              <MainSocks
                                width="108%"
                                mwidth="100%"
                                src={linergray}
                              />
                            )}
                            {active === 'OrangeSocks' && (
                              <MainSocks
                                width="108%"
                                mwidth="100%"
                                src={linerorange}
                              />
                            )}
                            {active === 'BlueSocks' && (
                              <MainSocks
                                width="108%"
                                mwidth="100%"
                                src={linerblue}
                              />
                            )}
                          </div>
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
                                height: '180px',
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
                                background="#666666"
                                onClick={() => setActive('GraySocks')}
                              />
                              <ColorBtn2
                                background="#e57d3e"
                                onClick={() => setActive('OrangeSocks')}
                              />
                              <ColorBtn2
                                background="#3f80f4"
                                onClick={() => setActive('BlueSocks')}
                              />
                            </div>
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
                        color: '#fff',
                        left: 0,
                        marginTop: '400px',
                        padding: '450px 0',
                      }}
                    >
                      <div
                        style={{
                          background: '#252121',
                          position: 'absolute',
                          width: '100vw',
                          top: 0,
                          height: '100%',
                        }}
                      ></div>
                      <div style={{ zIndex: 0 }}>
                        20년이 넘는 역사를 가진 Injinji.
                        <br />
                        <br />
                        그 시작을 알린 Liner는
                        <br />
                        발 속옷의 시작이자
                        <br />
                        발가락 양말을 널리 알리기 시작하였습니다.
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
                    <GridContainer>
                      <div
                        style={{
                          position: 'relative',
                          gridColumnStart: 1,
                          gridColumnEnd: 7,
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            width: '50vw',
                            height: '788px',
                            backgroundImage: `url('${grayImage}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundOrigin: 'border-box',
                            backgroundPosition: 'right center',
                            right: 0,
                          }}
                        ></div>
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
                            backgroundImage: `url('${orangeImage}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'left center',
                            backgroundSize: 'cover',
                          }}
                        ></div>
                      </div>
                    </GridContainer>
                  </DescriptionDiv>
                  <DescriptionDiv
                    style={{
                      width: '100%',
                      marginTop: '450px',
                      marginBottom: '450px',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        background: '#FFFCFC',
                        position: 'absolute',
                        width: '100vw',
                        height: '1400px',
                        zIndex: '-1',
                      }}
                    ></div>
                    <GridContainer>
                      <div
                        style={{
                          gridColumnStart: 1,
                          gridColumnEnd: 7,
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontSize: '80px' }}>
                          <span style={{ fontSize: '150px' }}>15</span>g
                        </div>
                        <div style={{ fontSize: '20px' }}>
                          Medium 사이즈 한 발 기준
                        </div>
                      </div>
                      <div
                        style={{
                          gridColumnStart: 8,
                          gridColumnEnd: 13,
                        }}
                      >
                        <div style={{ fontSize: '40px', marginBottom: '31px' }}>
                          <span style={{ fontSize: '60px' }}>liner :</span> 안에
                          대는 것, 안감
                        </div>
                        <div style={{ fontSize: '25px', lineHeight: '50px' }}>
                          속옷에서 영감을 받아
                          <br />
                          일반 양말 속에 착용하는 것을 목적으로 <br />
                          얇고 가볍게 만들었습니다.
                        </div>
                      </div>
                    </GridContainer>
                  </DescriptionDiv>
                  <DescriptionDiv style={{ marginBottom: '450px' }}>
                    <GridContainer>
                      <div
                        style={{
                          gridColumnStart: 3,
                          gridColumnEnd: 13,
                          height: '823px',
                          backgroundImage: `url('${stacked}')`,
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div
                        style={{
                          marginTop: '176px',
                          gridColumnStart: 2,
                          gridColumnEnd: 11,
                          height: '674px',
                          backgroundImage: `url('${blackFeather}')`,
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </GridContainer>
                  </DescriptionDiv>
                  <DescriptionDiv
                    style={{ position: 'relative', justifyContent: 'center' }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        backgroundColor: '#414141',
                        width: '100vw',
                        height: '1396px',
                        top: 0,
                      }}
                    ></div>
                    <GridContainer
                      style={{
                        position: 'relative',
                        height: '1396px',
                        color: '#fff',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          gridColumnStart: 2,
                          gridColumnEnd: 7,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <div style={{ fontSize: '40px', fontWeight: 'bold' }}>
                          Liner가 얇은 이유
                        </div>
                        <div
                          style={{
                            marginTop: '30px',
                            fontSize: '25px',
                            lineHeight: '50px',
                          }}
                        >
                          발가락 양말 제조 공정은 일반 양말과는 달리
                          <br />
                          특수기계를 사용해야 할 만큼 복잡합니다.
                          <br />
                          <br />
                          거기에 다루기가 까다롭기로 유명한
                          <br />
                          COOLMAX 100% 원사 사용을 고집하다보니
                          <br />
                          수도 없이 많은 불량이 나왔죠.
                          <br />
                          <br />
                          하지만, 지속적인 개선을 통해
                          <br />
                          COOLMAX 원사 단{' '}
                          <span
                            style={{ fontSize: '30px', fontWeight: 'bolder' }}
                          >
                            두 올
                          </span>
                          을 이용한
                          <br />
                          발가락 양말 제조에 성공하였습니다.
                        </div>
                      </div>
                      <div
                        ref={rellaxRef}
                        style={{
                          gridColumnStart: 8,
                          gridColumnEnd: 13,
                        }}
                      >
                        <img
                          src={strap}
                          alt=""
                          style={{ transform: 'translateY(-150px)' }}
                        />
                      </div>
                    </GridContainer>
                    {/* 
                    <div
                      ref={rellaxRef}
                      style={{
                        display: 'flex',
                        flex: '50%',
                        height: '800px',
                        justifyContent: 'end',
                      }}
                    >
                      <img
                        src={strap}
                        alt=""
                        style={{
                          width: 'auto',
                          height: '1300px',
                          transform: 'translateY(-300px)',
                        }}
                      />
                    </div> */}
                  </DescriptionDiv>
                  <DescriptionDiv style={{ marginTop: '450px' }}>
                    <GridContainer>
                      <div
                        style={{
                          gridColumnStart: 1,
                          gridColumnEnd: 10,
                          height: '674px',
                          backgroundImage: `url('${blueFeather}')`,
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
                        <div
                          style={{ fontSize: '150px', paddingLeft: '200px' }}
                        >
                          NST
                        </div>
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
                          <span
                            style={{ fontSize: '30px', fontWeight: 'bold' }}
                          >
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
                          gridColumnStart: 2,
                          gridColumnEnd: 12,
                          height: '732px',
                          backgroundImage: `url('${nst}')`,
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
                          <span
                            style={{ fontSize: '30px', fontWeight: 'bold' }}
                          >
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
                  <DescriptionDiv style={{ marginTop: '450px' }}>
                    <GridContainer>
                      <div
                        style={{
                          gridColumnStart: 2,
                          gridColumnEnd: 12,
                          height: '751px',
                          backgroundImage: `url('${whiteFeather}')`,
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </GridContainer>
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
            ),
            runner: (
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
                                <MainSocks
                                  width="500px"
                                  mwidth="100%"
                                  src={crewwhite}
                                />
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
                                <MainSocks
                                  width="500px"
                                  mwidth="100%"
                                  src={crewblack}
                                />
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
                                <MainSocks
                                  width="500px"
                                  mwidth="100%"
                                  src={crewsand}
                                />
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
                            <UL1
                              style={{ marginTop: '0', textAlign: 'center' }}
                            >
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
                            <UL1
                              style={{ marginTop: '0', textAlign: 'center' }}
                            >
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
                        <MainSocks
                          width="700px"
                          mwidth="100%"
                          src={crewwhite}
                        />
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
                        <div
                          style={{ fontSize: '150px', paddingLeft: '200px' }}
                        >
                          NST
                        </div>
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
                          <span
                            style={{ fontSize: '30px', fontWeight: 'bold' }}
                          >
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
                          <span
                            style={{ fontSize: '30px', fontWeight: 'bold' }}
                          >
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
            ),
            trailer: <Trailer active={active} setActive={setActive} />,
            ecowool: <Ecowool active={active} setActive={setActive} />,
          }[title]
        }
      </div>
    </>
  );
};

export default Product;
