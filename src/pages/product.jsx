import React, { useState, useEffect } from 'react';
import Media from 'react-media';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperstyle.css';
import grayBox from '../components/Rectangle.png';
import linerwhite from '../components/라이너 화이트.webp';
import linerblack from '../components/라이너 블랙.webp';
import linergray from '../components/라이너 그레이.webp';
import linerorange from '../components/라이너 오렌지.webp';
import linerblue from '../components/라이너 블루.webp';
import crewwhite from '../components/크루white.webp';
import crewblack from '../components/크루black.webp';
import crewsand from '../components/크루sand.webp';
import trailergray from '../components/트레일러gray.webp';
import trailerblack from '../components/트레일러black.webp';
import trailersand from '../components/트레일러sand.webp';
import ecowoolnavy from '../components/에코울navy.webp';
import ecowoolblack from '../components/에코울black.webp';

const ProductMenu = styled.div`
  display: flex;
  position: relative;
  top: 55px;
  width: 100vw;
  height: 55px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: #efefef;
`;

const ProductName = styled.h5`
  color: #666666;
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
  width: 100vw;
  height: calc(100vh - 110px);
  align-items: center;
  /* overflow: auto; */
  padding-bottom: 10vh;
  margin: 0;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    left: 8.54vw;
    bottom: -10vh;
    height: 1px;
    width: 82.91vw;
    border-bottom: 1px solid #bcbcbc;
  }
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
  position: absolute;
  top: 50%;
  left: 59%;
  transform: translate(-50%, -45%);
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

const UL1 = styled.ul`
  list-style: none;
  margin: 20vh 0 0 8.54vw;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

const LI1 = styled.li`
  font-weight: bolder;
  font-size: 3rem;

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
  padding: 25vh 8.54vw 0;
  gap: 100px;
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

const SubSocks = styled.img`
  alt: 'socks';
  width: 30vw;
  height: 30vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const Product = () => {
  let { item } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState('liner');
  const [active, setActive] = useState('WhiteSocks');

  useEffect(() => {
    setActive('WhiteSocks');
    setTitle(pathname.split('/')[2]);
  }, [pathname]);

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
        <Product title="liner" name="라이너"></Product>
        <Product title="runner" name="러너"></Product>
        <Product title="trailer" name="트레일러"></Product>
        <Product title="ecowool" name="에코울"></Product>
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
                          <LI1>라이너 Liner.</LI1>
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
                        <UL1>
                          <LI1>라이너 Liner.</LI1>
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
            runner: (
              <>
                <Media queries={{ small: { maxWidth: 768 } }}>
                  {(matches) =>
                    matches.small ? (
                      <>
                        <UL1>
                          <LI1>러너 Crew.</LI1>
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
                          <LI1>러너 Crew.</LI1>
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
                          <LI1>트레일러 trailer.</LI1>
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
                          <LI1>트레일러 trailer.</LI1>
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
                          <LI1>에코울 ecowool.</LI1>
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
                          <LI1>에코울 ecowool.</LI1>
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
