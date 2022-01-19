import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Injinji from './Injinji.svg';

const Navbar = styled.div`
  padding-top: 10px;
  height: 55px;
  width: 100vw;
  box-sizing: border-box;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menubtn = styled.div`
  color: ${(props) => (props.title === props.pages ? '#000' : '#808080')};
  display: inline-block;
  position: relative;
  width: 110px;
  text-align: center;
  box-sizing: border-box;
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

  const Btn = ({ pagenumber, title }) => {
    const handleBtn = () => {
      setPages(title);
      navigate(`/${title}`);
    };

    return (
      <Menubtn
        onClick={handleBtn}
        pagenumber={pagenumber}
        pages={pages}
        title={title}
      >
        {title}
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
      <Navbar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '10px',
          }}
        >
          <Logo pagenumber="0" title=""></Logo>
          <Btn pagenumber="1" title="about"></Btn>
          <Btn pagenumber="2" title="products"></Btn>
        </div>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Gnb;
