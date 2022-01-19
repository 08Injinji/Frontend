import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Injinji from '../../components/icon';
import { MdLogout } from 'react-icons/md';

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
          <Link to="1">
            <ListItem isActive={location.pathname.split('/')[2] === '1'}>
              상품 관리
            </ListItem>
          </Link>
          <Link to="2">
            <ListItem isActive={location.pathname.split('/')[2] === '2'}>
              계정 관리
            </ListItem>
          </Link>
          <Link to="3">
            <ListItem isActive={location.pathname.split('/')[2] === '3'}>
              메뉴 추가
            </ListItem>
          </Link>
          <Link to="4">
            <ListItem isActive={location.pathname.split('/')[2] === '4'}>
              메뉴 추가
            </ListItem>
          </Link>
          <Link to="5">
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
            <MdLogout size={20} color="#686868" />
          </div>
        </Account>
      </Left>
      <div style={{ width: '100%', height: '100%', padding: '30px' }}>
        <Outlet />
      </div>
    </Container>
  );
};
export default Admin;