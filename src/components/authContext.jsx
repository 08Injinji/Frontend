import React from 'react';

const AuthContext = React.createContext({ isAuth: false, level: null });

const AuthProvider = ({ children }) => {
  // 서버에서 토큰 유효성 검사 대신 임시로
  const auth = JSON.parse(localStorage.getItem('auth'));
  const [isAuth, setAuth] = React.useState(auth !== null ? auth.isAuth : false);
  const [level, setLevel] = React.useState(auth !== null ? auth.level : 0);

  React.useLayoutEffect(() => {
    if (auth === null) {
      localStorage.setItem(
        'auth',
        JSON.stringify({ isAuth: false, level: null }),
      );
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuth, level, setAuth, setLevel }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
