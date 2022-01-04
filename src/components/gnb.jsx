import { Outlet } from 'react-router-dom';

const Gnb = () => {
  return (
    <>
      <div
        style={{ width: '100vw', height: '80px', backgroundColor: '#f2f2f2' }}
      ></div>
      <Outlet />
    </>
  );
};

export default Gnb;
