import {
  UL1,
  LI1,
  SocksContainer,
  GridContainer,
  MainSocks,
  ColorBtn2,
  Description,
  DescriptionDiv,
  MainDiv,
  ColorBtn,
  DescriptionDiv2,
  DescUL,
  SubSocks,
  DescLI,
  DescLI2,
} from './styles';
import Media from 'react-media';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperstyle.css';
import ecowoolnavy from '../../images/에코울navy.webp';
import ecowoolblack from '../../images/에코울black.webp';
import grayBox from '../../images/Rectangle.png';

const Ecowool = ({ active, setActive }) => {
  return (
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
                  <img className="ecowool" alt=" " src={ecowoolnavy} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="ecowool" alt=" " src={ecowoolblack} />
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
                  <MainSocks width="45%" mwidth="80%" src={ecowoolnavy} />
                )}
                {active === 'BlackSocks' && (
                  <MainSocks width="45%" mwidth="80%" src={ecowoolblack} />
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
              그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
              같으며, 행복스럽고 가는 굳세게 것이다.
            </DescLI2>
          </DescUL>
        </DescriptionDiv>
        <DescriptionDiv2>
          <DescUL>
            <DescLI>&nbsp;다양한 색상</DescLI>
            <DescLI2>
              바이며, 생명을 모래뿐일 불어 이 인생을 청춘 이상의 이상
              그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
              같으며, 행복스럽고 가는 굳세게 것이다.
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
              그리하였는가? 인생을 기관과 목숨을 있는 풀이 끓는다. 따뜻한 대고,
              같으며, 행복스럽고 가는 굳세게 것이다.
            </DescLI2>
          </DescUL>
        </DescriptionDiv>
      </Description>
    </>
  );
};

export default Ecowool;
