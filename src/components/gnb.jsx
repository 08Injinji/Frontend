import React, { useState, useRef, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { links } from './menudata';
import Injinji from './Injinji.svg';
import Footer from './footer';

const Navbar = styled.div`
  height: 55px;
  width: 100vw;
  box-sizing: border-box;
  z-index: 90;
  display: flex;
  position: fixed;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s cubic-bezier(0.88, 0.78, 0.18, 0.93);
`;

const Menubtn = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  text-align: center;
  box-sizing: border-box;
`;

const MenuUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const MenuLi = styled.li`
  display: inline-block;
  color: ${(props) => (props.title === props.pages ? '#000' : '#808080')};
  margin: 0 20px 0 20px;
  transition: color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const InjinjiLogo = styled.img`
  height: 25px;
  margin: 0 20px 0 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Gnb = () => {
  let navigate = useNavigate();
  const [pages, setPages] = useState('');
  const navbar = useRef(null);
  const { pathname } = useLocation();
  //네비게이션바 hide 기능
  useLayoutEffect(() => {
    var lastScrollTop;
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.current.style.top = '-80px';
      } else {
        navbar.current.style.top = '0';
      }
      lastScrollTop = scrollTop;
    });
  });

  const Btn = () => {
    return (
      <Menubtn>
        <MenuUl>
          {links.map((link) => {
            const { pagenumber, title, text, id } = link;
            const handleBtn = () => {
              setPages(title);
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
      </Menubtn>
    );
  };

  const Logo = ({ pagenumber, title }) => {
    const handleLogo = () => {
      setPages(pagenumber);
      navigate(`/${title}`);
    };

    return (
      <>
        <InjinjiLogo src={Injinji} onClick={handleLogo}></InjinjiLogo>
      </>
    );
  };

  return (
    <>
      <Navbar ref={navbar}>
        <Logo pagenumber="0" title=""></Logo>
        {/* <Btn pagenumber="1" title="about" text="about"></Btn>
          <Btn pagenumber="2" title="product/liner" text="product"></Btn> */}
        <Btn />
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Gnb;
