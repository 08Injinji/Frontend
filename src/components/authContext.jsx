import React from 'react';
import { request } from '../apis';

const AuthContext = React.createContext({
  isAuth: false,
  level: null,
  isLoading: true,
});

async function VerifyLoginToken(setAuth, setLevel, setLoading) {
  const res = await request('/login/check', {
    method: 'POST',
    credentials: 'include'
  })
  if (
    res.msg === "엑세스 토큰, 리프레시 토큰은 문제가 없는 상황이므로 정상적으로 사용을 권장한다" ||
    res.msg ===
      '리프레시 토큰은 문제가 없는 상황이므로 정상적으로 사용을 권장한다' ||
    res.msg === '리프레시 토큰 발급 완료 2' ||
    res.msg === '리프레시 토큰 재발급 완료 2-1' ||
    res.msg ===
      '리프레시 토큰은 문제가 없는 상황이므로 accessToken만 재발급해준다'
  ) {
    setAuth(true);
  } else {
    setAuth(false);
  }
  setLoading(false);
}

const AuthProvider = ({ children }) => {
  // 서버에서 토큰 유효성 검사 대신 임시로
  //   const auth = JSON.parse(localStorage.getItem('auth'));
  const [isAuth, setAuth] = React.useState();
  const [level, setLevel] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  // 실제 백엔드를 통한 토큰 유효성 검사
  React.useLayoutEffect(() => {
    VerifyLoginToken(setAuth, setLevel, setLoading);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, level, setAuth, setLevel, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
