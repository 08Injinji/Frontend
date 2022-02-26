import React, { useContext } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Injinji from '../../components/icon';
import { MdLogout } from 'react-icons/md';
import { InfoModal } from '../../components/infoModal';
import { AuthContext } from '../../components/authContext';
import { HTTP_URL } from '../../const';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Left = styled.div`
  position: relative;
  width: 300px;
  min-width: 200px;
  height: 100%;
  border-right: 1px solid #f2f2f2;
  overflow-y: auto;
`;

const Logo = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: medium;
  font-family: Roboto;
`;

const List = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const ListItem = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background: #fefefe;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  padding-left: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 300;
  ${(props) =>
    props.isActive
      ? "font-weight:400;&::before{content:'';position:absolute;left:0;top:0;width:8px;height:60px;background:#FF8E8E;z-index:1;}"
      : undefined}
  &:hover {
    background: #f2f2f2;
  }
`;

const Account = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InfoCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #666;
`;

const Admin = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [isLoginInfoModalOpen, setLoginInfoModalOpen] = React.useState(false);

  function Logout() {
    fetch(`${HTTP_URL}/login/logout`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.msg === '로그아웃 되었습니다') {
          setAuth(false);
          navigate('/login', { replace: true });
        }
      });
  }

  return (
    <Container>
      <Left>
        <Logo>
          <Link to="/admin">
            <Injinji />
          </Link>
          <div>Admin Page</div>
        </Logo>
        <List>
          <Link to="1" replace>
            <ListItem isActive={location.pathname.split('/')[2] === '1'}>
              상품 관리
            </ListItem>
          </Link>
          <Link to="2" replace>
            <ListItem isActive={location.pathname.split('/')[2] === '2'}>
              계정 관리
            </ListItem>
          </Link>
          <Link to="3" replace>
            <ListItem isActive={location.pathname.split('/')[2] === '3'}>
              메뉴 추가
            </ListItem>
          </Link>
          <Link to="4" replace>
            <ListItem isActive={location.pathname.split('/')[2] === '4'}>
              메뉴 추가
            </ListItem>
          </Link>
          <Link to="5" replace>
            <ListItem isActive={location.pathname.split('/')[2] === '5'}>
              메뉴 추가
            </ListItem>
          </Link>
        </List>
        <Account>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InfoCircle />
            <div style={{ marginLeft: '10px' }}>
              <div>name</div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '300',
                  fontFamily: 'Roboto',
                }}
              >
                description
              </div>
            </div>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <MdLogout
              style={{ cursor: 'pointer' }}
              onClick={() => setLoginInfoModalOpen(true)}
              size={20}
              color="#686868"
            />
          </div>
        </Account>
      </Left>
      <div style={{ width: '100%', height: '100%', padding: '30px' }}>
        <Outlet context={[isLoginInfoModalOpen, setLoginInfoModalOpen]} />
      </div>
      {isLoginInfoModalOpen ? (
        <InfoModal
          close={() => setLoginInfoModalOpen(false)}
          title="로그아웃"
          message="정말 로그아웃 하시겠습니까?"
          okFunction={Logout}
        />
      ) : null}
    </Container>
  );
};
export default Admin;
