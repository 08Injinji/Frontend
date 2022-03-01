import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Outlet, useNavigate } from 'react-router-dom';
// import { FaStream } from 'react-icons/fa'; (!)
// import { BsXLg } from 'react-icons/bs'; (!)
import styled from 'styled-components';
import { links } from './menudata';
// import Injinji from './Injinji.svg';
import Footer from './footer';
import Icon from './icon';

const Navbar = styled.nav`
  height: ${(props) => (props.extendNavbar ? '100vh' : '55px')};
  width: 100vw;
  box-sizing: border-box;
  z-index: 90;
  /* display: flex; */
  position: fixed;
  background-color: #fff;
  /* align-items: center; */
  /* justify-content: space-between; */
  transition: 0.3s cubic-bezier(0.88, 0.78, 0.18, 0.93);
  @media ${({ theme }) => theme.device.desktop} {
    height: 55px;
  }
`;

// const Menubtn = styled.div` (!)
//   display: inline-block;
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 250px;
//   text-align: center;
//   box-sizing: border-box;
//   @media ${({ theme }) => theme.device.mobile} {
//     display: none;
//   }
// `;

const MenubtnExtended = styled.div`
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

// const OpenLinksButton = styled.button` (!)
//   background: none;
//   border: none;
//   /* color: white; */
//   font-size: 28px;
//   cursor: pointer;

//   @media ${({ theme }) => theme.device.desktop} {
//     display: none;
//   }
// `;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

const MenuUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 1.7em;
  }
`;

const MenuLi = styled.li`
  display: inline-block;
  color: ${(props) => (props.pagenumber === props.pages ? '#000' : '#808080')};
  margin: 0 30px 0 30px;
  transition: color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

// const InjinjiLogo = styled.img`
//   height: 25px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

const NavbarLeft = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

// const NavbarRight = styled.div` (!)
//   flex: 30%;
//   display: flex;
//   justify-content: flex-end;
//   @media ${({ theme }) => theme.device.mobile} {
//     padding: 2% 5% 0 0;
//   }
// `;

const Gnb = () => {
  let navigate = useNavigate();
  const [pages, setPages] = useState('');
  const navbar = useRef(null);
  const { pathname } = useLocation();
  const [extendNavbar, setExtendNavbar] = useState(false);
  //네비게이션바 hide 기능
  useLayoutEffect(() => {
    var lastScrollTop;
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < 80) {
        navbar.current.style.top = '0';
      } else if (scrollTop > lastScrollTop) {
        navbar.current.style.top = '-80px';
      } else {
        navbar.current.style.top = '0';
      }
      lastScrollTop = scrollTop;
    });
  });

  useEffect(() => {
    setExtendNavbar(false);
  }, [pathname]);

  // const Btn = () => { (!)
  //   return (
  //     <Menubtn>
  //       <MenuUl>
  //         {links.map((link) => {
  //           const { pagenumber, title, text, id } = link;
  //           const handleBtn = () => {
  //             setPages(pagenumber);
  //             navigate(`/${title}`);
  //           };
  //           return (
  //             <MenuLi
  //               onClick={handleBtn}
  //               pagenumber={pagenumber}
  //               pages={pages}
  //               title={title}
  //               text={text}
  //               key={id}
  //             >
  //               {text}
  //             </MenuLi>
  //           );
  //         })}
  //       </MenuUl>
  //     </Menubtn>
  //   );
  // };

  const BtnExtended = () => {
    return (
      <MenubtnExtended>
        <MenuUl>
          {links.map((link) => {
            const { pagenumber, title, text, id } = link;
            const handleBtn = () => {
              setPages(pagenumber);
              navigate(`/${title}`);
            };
            return (
              <MenuLi
                onClick={handleBtn}
                pagenumber={pagenumber}
                pages={pages}
                title={title}
                text={text}
                key={id}
              >
                {text}
              </MenuLi>
            );
          })}
        </MenuUl>
      </MenubtnExtended>
    );
  };

  const Logo = ({ pagenumber, title }) => {
    const handleLogo = () => {
      setPages(pagenumber);
      navigate(`/${title}`);
      setExtendNavbar(false);
    };

    return (
      <div
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleLogo}
      >
        {/* <InjinjiLogo src={Injinji} onClick={handleLogo}></InjinjiLogo> */}
        <Icon />
      </div>
    );
  };

  return (
    <>
      <Navbar ref={navbar} extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <NavbarLeft>
            <Logo pagenumber="0" title=""></Logo>
            {/* <Btn pagenumber="1" title="about" text="about"></Btn>
              <Btn pagenumber="2" title="product/liner" text="product"></Btn> */}
          </NavbarLeft>
          {/* NavbarRight 영역은 컨텐츠가 다 완성되면 다시 오픈 */}
          {/* <NavbarRight>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? (
                <>
                  <BsXLg color="#666666" />
                </>
              ) : (
                <>
                  {' '}
                  <FaStream color="#666666" />
                </>
              )}
            </OpenLinksButton>
            <Btn />
          </NavbarRight> */}
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <BtnExtended />
          </NavbarExtendedContainer>
        )}
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Gnb;
