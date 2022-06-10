import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { links } from './menudata';
import Footer from './footer';
import InjinjiLogo from './Logo';
import GridChecker from './gridChecker';
import { flexbox } from '@mui/system';

const Navbar = styled.nav`
  width: 100%;
  height: 55px;
  z-index: 90;
  position: fixed;
  background-color: #fff;

  //외부 flex container
  display: flex;
  justify-content: space-between;
`;

const NavbarLeft = styled.div`
  //내부 flex container
  display: flex;
  align-items: center;
  //외부 flex item으로써의 속성
  flex-basis: 500px;
  flex-shrink: 0;

  @media ${({ theme }) => theme.device.desktop} {
    padding-left: 5%;
  }
`;

const PageButton = styled.div`
  width: 90px;
  color: ${(props) => (props.pagenumber === props.pages ? '#000' : '#808080')};
  transition: color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

// const NavbarRight = styled.div`
//   //내부 flex container
//   display: flex;
//   align-items: center;
//   //외부 flex item으로써의 속성
//   flex-basis: content;
//   flex-shrink: 0;

//   @media ${({ theme }) => theme.device.desktop} {
//     padding-right: 5%;
//   }
//   background-color: yellow;
// `;

const MenuBtnExtended = styled.div`
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

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

const OutletDiv = styled.div`
  max-width: 1400px;
  width: 100vw;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.desktop} {
    padding-top: 55px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 55px;
  }
`;

const Logo = (props) => {
  const handleLogo = () => {
    props.setPages('0');
    props.navigate(``);
    props.setExtendNavbar(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: '50px',
      }}
      onClick={handleLogo}
    >
      <InjinjiLogo />
    </div>
  );
};

const Btn = ({ setPages, navigate, pages }) => {
  const handleBtn = (pagenumber, title) => {
    setPages(pagenumber);
    navigate(`/${title}`);
    console.log(this);
  };

  return (
    <>
      {links.map((link) => {
        const { pagenumber, title, text, id } = link;
        return (
          <PageButton
            onClick={() => handleBtn(pagenumber, title)}
            pagenumber={pagenumber}
            pages={pages}
            key={id}
          >
            {text}
          </PageButton>
        );
      })}
    </>
  );
};

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

  return (
    <>
      <Navbar ref={navbar}>
        <NavbarLeft>
          <Logo
            setPages={setPages}
            navigate={navigate}
            setExtendNavbar={setExtendNavbar}
          />
          <Btn setPages={setPages} navigate={navigate} pages={pages}></Btn>
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
      </Navbar>
      <OutletDiv>
        <GridChecker></GridChecker>
        <Outlet />
      </OutletDiv>
      <Footer />
    </>
  );
};

export default Gnb;
