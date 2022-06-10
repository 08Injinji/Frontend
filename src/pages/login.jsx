import { useState, useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InjinjiLogo from '../components/Logo';
import { AuthContext } from '../components/authContext';
import { HTTP_URL } from '../const';

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
  &:focus {
    box-shadow: 0px 0px 4px #060;
  }
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

function SubmitLoginData({ id, pw }, setAlertMsg, navigate, ChangeAuthState) {
  fetch(`${HTTP_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      password: pw,
    }),
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if (json.msg === '아이디가 존재하지 않음, 회원가입 필요') {
        setAlertMsg('존재하지 않는 계정입니다. 회원가입을 진행해주세요.');
      } else if (json.msg === '패스워드 불일치') {
        setAlertMsg('비밀번호가 일치하지 않습니다.');
      } else if (json.id !== undefined && json.id === id) {
        navigate('/admin', { replace: true });
        ChangeAuthState();
      }
    })
    .catch((e) => console.error(e));
}

const AdminLogin = () => {
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState('');
  const [loginData, setLoginData] = useState({
    id: '',
    pw: '',
  });
  const { isAuth, setAuth, setLevel } = useContext(AuthContext);

  function ChangeAuthState() {
    setAuth(true);
    setLevel(1);
  }

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  if (isAuth) return <Navigate to="/" replace={true} />;
  if (isAuth === undefined) return <div>now loading...</div>;
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
          <InjinjiLogo />
        </div>
        <Input
          value={loginData.id}
          onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
          placeholder="아이디를 입력해주세요."
        ></Input>
        <Input
          value={loginData.pw}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              SubmitLoginData(
                loginData,
                setAlertMsg,
                navigate,
                ChangeAuthState,
              );
            }
          }}
          onChange={(e) => setLoginData({ ...loginData, pw: e.target.value })}
          placeholder="비밀번호를 입력해주세요."
          type="password"
          style={{ marginTop: '15px' }}
        ></Input>
        <AlertDiv>{alertMsg}</AlertDiv>
        <Button
          onClick={() => {
            // handleLogin();
            SubmitLoginData(loginData, setAlertMsg, navigate, ChangeAuthState);
          }}
        >
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default AdminLogin;
