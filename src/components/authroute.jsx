import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authContext';

const AuthRoute = ({ path, children }) => {
  const { isAuth, isLoading } = React.useContext(AuthContext);
  // 인증된 사용자면 원하는 컴포넌트로 이동
  if (isLoading) {
    return <div></div>;
  }
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default AuthRoute;
