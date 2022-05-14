import React from 'react';
import { HTTP_URL } from '../constants';

const AuthContext = React.createContext({
  isAuth: false,
  level: null,
  isLoading: true,
});

function VerifyLoginToken(setAuth, setLevel, setLoading) {
  fetch(`${HTTP_URL}/login/check`, {
    method: 'POST',
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((json) => {
      if (
        json.msg ===
          '리프레시 토큰은 문제가 없는 상황이므로 정상적으로 사용을 권장한다' ||
        json.msg === '리프레시 토큰 발급 완료 2' ||
        json.msg === '리프레시 토큰 재발급 완료 2-1' ||
        json.msg ===
          '리프레시 토큰은 문제가 없는 상황이므로 accessToken만 재발급해준다'
      ) {
        setAuth(true);
      } else {
        setAuth(false);
      }
      // setLoading과 setAuth 위치를 바꾸니까 기능이 잘 작동함. 왜인지는 잘 모르겠음.
      setLoading(false);
    });
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
