import React, { useState, useRef, useEffect } from 'react';
import Media from 'react-media';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Rellax from 'rellax';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperstyle.css';
import grayBox from '../images/Rectangle.png';
import linerwhite from '../images/Liner-White.png';
import linerblack from '../images/Liner-Black.png';
import linergray from '../images/Liner-Gray.png';
import linerorange from '../images/Liner-Orange.png';
import linerblue from '../images/Liner-Blue.png';
import crewwhite from '../images/크루white.webp';
import crewblack from '../images/크루black.webp';
import crewsand from '../images/크루sand.webp';
import trailergray from '../images/트레일러gray.webp';
import trailerblack from '../images/트레일러black.webp';
import trailersand from '../images/트레일러sand.webp';
import ecowoolnavy from '../images/에코울navy.webp';
import ecowoolblack from '../images/에코울black.webp';
import orangeImage from '../images/오렌지 깃털2.jpg';
import grayImage from '../images/그레이 깃털2.jpg';
import coolmaxLogo from '../images/coolmax-logo-removebg-preview.png';
// import strap from '../images/strap.png';
import strap from '../images/2ply.png';
import stacked from '../images/IMG_0156.jpg';
import blackFeather from '../images/블랙-깃털2.jpg';
import blueFeather from '../images/블루-깃털1.jpg';
import whiteFeather from '../images/화이트-깃털1.png';
import nst from '../images/NST.jpg';
import coolmaxDescImage from '../images/coolmax2.png';
import flag from '../images/태극기.png';

const ProductMenu = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  width: 100vw;
  height: 55px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #efefef;
`;

const ProductName = styled.h5`
  color: #666666;
  font-size: 18px;
  font-weight: ${(props) =>
    props.title === props.params ? 'bolder' : 'normal'};
  transition: color 0.2s ease-in-out;
  z-index: 10;
  color: ${(props) => (props.title === props.params ? '#000' : '#666')};
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const SocksContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 110px);
  align-items: center;
  /* overflow: auto; */
  /* padding-bottom: 10vh; */
  margin: 0;
  box-sizing: border-box;
  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #bcbcbc;
  } */
  @media ${({ theme }) => theme.device.mobile} {
    height: 80vh;
    display: flex;
    flex-direction: column-reverse;
    &:after {
      bottom: -10vh;
    }
  }
`;

const MainDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    overflow: hidden;
  }
`;

const MainSocks = styled.img`
  alt: 'linerwhite';
  width: ${(props) => props.width};
  /* margin-top: 50px; */
  @media ${({ theme }) => theme.device.mobile} {
    width: ${(props) => props.mwidth};
  }
`;

const ColorBtn = styled.button`
  position: absolute;
  border: 2px solid #ccc;
  left: 50vw;
  bottom: ${(props) => props.bottom};
  border-radius: 60px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: ${(props) => props.background};
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:focus {
    border: 3px solid #ccc;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 90vw;
  }
`;

const ColorBtn2 = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #ccc;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  bottom: ${(props) => props.bottom};
  background: ${(props) => props.background};
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:focus {
    border: 3px solid #ccc;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 90vw;
  }
`;

const UL1 = styled.ul`
  list-style: none;
  margin: 200px 0 0 0;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

const LI1 = styled.li`
  font-weight: regular;
  font-size: 100px;
  font-family: 'Arimo', sans-serif;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3.2rem;
    padding-bottom: 15px;
  }
`;

const Description = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 5vh 0 15vh;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
    /* gap: 40px; */
    margin: 10vh 0;
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

const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0 20px;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`;

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
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
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
                          <div
                            style={{
                              display: 'grid',
                              alignItems: 'center',
                              position: 'relative',
                              gridColumnStart: 7,
                              gridColumnEnd: 13,
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
                        </GridContainer>
                        {/* 
                        <UL1>
                          <LI1>Liner</LI1>
                          <a
                            href="https://smartstore.naver.com/injinji"
                            style={{
                              display: 'inline-block',
                              width: '25vw',
                              fontSize: '22px',
                              fontWeight: 'normal',
                              marginTop: '2vw',
                            }}
                          >
                            구매하러 가기 &gt;
                          </a>
                        </UL1>
                        <MainDiv>
                          <ColorBtn
                            bottom="20vh"
                            background="#fff"
                            onClick={() => setActive('WhiteSocks')}
                          />
                          <ColorBtn
                            bottom="16vh"
                            background="#000000"
                            onClick={() => setActive('BlackSocks')}
                          />
                          <ColorBtn
                            bottom="12vh"
                            background="#666666"
                            onClick={() => setActive('GraySocks')}
                          />
                          <ColorBtn
                            bottom="8vh"
                            background="#e57d3e"
                            onClick={() => setActive('OrangeSocks')}
                          />
                          <ColorBtn
                            bottom="4vh"
                            background="#3f80f4"
                            onClick={() => setActive('BlueSocks')}
                          />
                          {active === 'WhiteSocks' && (
                            <MainSocks
                              width="70%"
                              mwidth="100%"
                              src={linerwhite}
                            />
                          )}
                          {active === 'BlackSocks' && (
                            <MainSocks
                              width="70%"
                              mwidth="100%"
                              src={linerblack}
                            />
                          )}
                          {active === 'GraySocks' && (
                            <MainSocks
                              width="70%"
                              mwidth="100%"
                              src={linergray}
                            />
                          )}
                          {active === 'OrangeSocks' && (
                            <MainSocks
                              width="70%"
                              mwidth="100%"
                              src={linerorange}
                            />
                          )}
                          {active === 'BlueSocks' && (
                            <MainSocks
                              width="70%"
                              mwidth="100%"
                              src={linerblue}
                            />
                          )}
                        </MainDiv> */}
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
                            backgroundPosition: 'center',
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
                            backgroundPosition: 'center',
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
                    }}
                  >
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
                          backgroundColor: 'red',
                          height: '823px',
                          backgroundImage: `url('${stacked}')`,
                        }}
                      ></div>
                      <div
                        style={{
                          marginTop: '100px',
                          gridColumnStart: 2,
                          gridColumnEnd: 11,
                          backgroundColor: 'blue',
                          height: '674px',
                          backgroundImage: `url('${blackFeather}')`,
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
                          backgroundColor: 'red',
                          gridColumnStart: 1,
                          gridColumnEnd: 10,
                          height: '674px',
                          backgroundImage: `url('${blueFeather}')`,
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
                        <UL1>
                          <LI1>Runner</LI1>
                          <a
                            href="https://smartstore.naver.com/injinji"
                            style={{
                              display: 'inline-block',
                              width: '25vw',
                              fontSize: '22px',
                              fontWeight: 'normal',
                              marginTop: '2vw',
                            }}
                          >
                            구매하러 가기 &gt;
                          </a>
                        </UL1>
                        <MainDiv>
                          <ColorBtn
                            bottom="20vh"
                            background="#fff"
                            onClick={() => setActive('WhiteSocks')}
                          />
                          <ColorBtn
                            bottom="16vh"
                            background="#000000"
                            onClick={() => setActive('BlackSocks')}
                          />
                          <ColorBtn
                            bottom="12vh"
                            background="#c2b280"
                            onClick={() => setActive('GraySocks')}
                          />
                          {active === 'WhiteSocks' && (
                            <MainSocks
                              width="50%"
                              mwidth="90%"
                              src={crewwhite}
                            />
                          )}
                          {active === 'BlackSocks' && (
                            <MainSocks
                              width="50%"
                              mwidth="90%"
                              src={crewblack}
                            />
                          )}
                          {active === 'GraySocks' && (
                            <MainSocks
                              width="50%"
                              mwidth="90%"
                              src={crewsand}
                            />
                          )}
                        </MainDiv>
                      </SocksContainer>
                    )
                  }
                </Media>

                <Description>
                  <DescriptionDiv>
                    <SubSocks src={grayBox} />
                    <DescUL>
                      <DescLI>&nbsp;부드러운 양말</DescLI>
                      <DescLI2>
                        바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
                      </DescLI2>
                    </DescUL>
                  </DescriptionDiv>
                  <DescriptionDiv2>
                    <DescUL>
                      <DescLI>&nbsp;다양한 색상</DescLI>
                      <DescLI2>
                        바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
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
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
                      </DescLI2>
                    </DescUL>
                  </DescriptionDiv>
                </Description>
              </>
            ),
            trailer: (
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
                            <img
                              className="trailer"
                              alt=" "
                              src={trailergray}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className="trailer"
                              alt=" "
                              src={trailerblack}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className="trailer"
                              alt=" "
                              src={trailersand}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </>
                    ) : (
                      <SocksContainer>
                        <UL1>
                          <LI1>Trailer</LI1>
                          <a
                            href="https://smartstore.naver.com/injinji"
                            style={{
                              display: 'inline-block',
                              width: '25vw',
                              fontSize: '22px',
                              fontWeight: 'normal',
                              marginTop: '2vw',
                            }}
                          >
                            구매하러 가기 &gt;
                          </a>
                        </UL1>
                        <MainDiv>
                          <ColorBtn
                            bottom="20vh"
                            background="#61646C"
                            onClick={() => setActive('WhiteSocks')}
                          />
                          <ColorBtn
                            bottom="16vh"
                            background="#000000"
                            onClick={() => setActive('BlackSocks')}
                          />
                          <ColorBtn
                            bottom="12vh"
                            background="#c2b280"
                            onClick={() => setActive('GraySocks')}
                          />
                          {active === 'WhiteSocks' && (
                            <MainSocks
                              width="45%"
                              mwidth="80%"
                              src={trailergray}
                            />
                          )}
                          {active === 'BlackSocks' && (
                            <MainSocks
                              width="45%"
                              mwidth="80%"
                              src={trailerblack}
                            />
                          )}
                          {active === 'GraySocks' && (
                            <MainSocks
                              width="45%"
                              mwidth="80%"
                              src={trailersand}
                            />
                          )}
                        </MainDiv>
                      </SocksContainer>
                    )
                  }
                </Media>

                <Description>
                  <DescriptionDiv>
                    <SubSocks src={grayBox} />
                    <DescUL>
                      <DescLI>&nbsp;부드러운 양말</DescLI>
                      <DescLI2>
                        바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
                      </DescLI2>
                    </DescUL>
                  </DescriptionDiv>
                  <DescriptionDiv2>
                    <DescUL>
                      <DescLI>&nbsp;다양한 색상</DescLI>
                      <DescLI2>
                        바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
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
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
                      </DescLI2>
                    </DescUL>
                  </DescriptionDiv>
                </Description>
              </>
            ),
            ecowool: (
              <>
                <Media queries={{ small: { maxWidth: 599 } }}>
                  {(matches) =>
                    matches.small ? (
                      <>
                        <UL1>
                          <LI1>Ecowool</LI1>
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
                            <img
                              className="ecowool"
                              alt=" "
                              src={ecowoolnavy}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className="ecowool"
                              alt=" "
                              src={ecowoolblack}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </>
                    ) : (
                      <SocksContainer>
                        <UL1>
                          <LI1>Ecowool</LI1>
                          <a
                            href="https://smartstore.naver.com/injinji"
                            style={{
                              display: 'inline-block',
                              width: '25vw',
                              fontSize: '22px',
                              fontWeight: 'normal',
                              marginTop: '2vw',
                            }}
                          >
                            구매하러 가기 &gt;
                          </a>
                        </UL1>
                        <MainDiv>
                          <ColorBtn
                            bottom="20vh"
                            background="#405889"
                            onClick={() => setActive('WhiteSocks')}
                          />
                          <ColorBtn
                            bottom="16vh"
                            background="#000000"
                            onClick={() => setActive('BlackSocks')}
                          />
                          {active === 'WhiteSocks' && (
                            <MainSocks
                              width="45%"
                              mwidth="80%"
                              src={ecowoolnavy}
                            />
                          )}
                          {active === 'BlackSocks' && (
                            <MainSocks
                              width="45%"
                              mwidth="80%"
                              src={ecowoolblack}
                            />
                          )}
                        </MainDiv>
                      </SocksContainer>
                    )
                  }
                </Media>

                <Description>
                  <DescriptionDiv>
                    <SubSocks src={grayBox} />
                    <DescUL>
                      <DescLI>&nbsp;부드러운 양말</DescLI>
                      <DescLI2>
                        바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
                      </DescLI2>
                    </DescUL>
                  </DescriptionDiv>
                  <DescriptionDiv2>
                    <DescUL>
                      <DescLI>&nbsp;다양한 색상</DescLI>
                      <DescLI2>
                        바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
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
                        그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다.
                        따뜻한 대고, 같으며, 행복스럽고 가는 굳세게 것이다.
                      </DescLI2>
                    </DescUL>
                  </DescriptionDiv>
                </Description>
              </>
            ),
          }[title]
        }
      </div>
    </>
  );
};

export default Product;
