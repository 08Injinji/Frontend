import { useLayoutEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/icon';
import { AuthContext } from '../components/authContext';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  background: #fff;
  box-shadow: 0px 0px 2px #666;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
`;

const Button = styled.div`
  width: 300px;
  height: 40px;
  background: #606060;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #505050;
  }
`;

const AlertDiv = styled.div`
  width: 300px;
  height: 30px;
  color: #d90a0a;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`;

const AdminLogin = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth, setLevel } = useContext(AuthContext);

  function FakeChangeAuthState() {
    setAuth(true);
    setLevel(1);
    localStorage.setItem('auth', JSON.stringify({ isAuth: true, level: 1 }));
  }

  function handleLogin() {
    navigate('/admin', { replace: true });
  }

  if (isAuth) return <Navigate to={-1} replace={true} />;
  return (
    <Container>
      <div
        style={{
          width: '500px',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginBottom: '40px' }}>
          <Icon />
        </div>
        <Input placeholder="아이디를 입력해주세요."></Input>
        <Input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          style={{ marginTop: '15px' }}
        ></Input>
        <AlertDiv>잘못된 아이디 또는 비밀번호입니다.</AlertDiv>
        <Button
          onClick={() => {
            FakeChangeAuthState();
            handleLogin();
          }}
        >
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default AdminLogin;
