import React from 'react';
import styled from 'styled-components';

const MainSocks = styled.img`
  alt: 'linerwhite';
  width: 100%;
  overflow: hidden;
  position: absolute;
`;

const ColorBtn1 = styled.button`
  position: absolute;
  border: 2px solid #ccc;
  left: 50vw;
  bottom: 50vh;
  border-radius: 60px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #fff;
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #26252a;
  }
  &:focus {
    background-color: #26252a;
  }
`;

const ColorBtn2 = styled.button`
  position: absolute;
  border: 2px solid #ccc;
  left: 50vw;
  bottom: 45vh;
  border-radius: 60px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #fff;
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #2a447b;
  }
  &:focus {
    background-color: #2a447b;
  }
`;

const ColorBtn3 = styled.button`
  position: absolute;
  border: 2px solid #ccc;
  left: 50vw;
  bottom: 40vh;
  border-radius: 60px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: #fff;
  text-decoration: none;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #484a4e;
  }
  &:focus {
    background-color: #484a4e;
  }
`;

const Data = () => {
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState();
  const [isDataLoading, setDataLoading] = React.useState(true);
  //서버에서 데이터 가져오기
  React.useLayoutEffect(() => {
    fetch('https://3.36.96.63/fetchtest/fetchAll', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(
        (json) => {
          console.log(json);
          setData(json);
          setDataLoading(false);
        },
        (error) => {
          setDataLoading(true);
          setError(error);
        },
      );
  }, []);

  const [active, setActive] = React.useState('BlackSocks');

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isDataLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        > */}
        <ColorBtn1 onClick={() => setActive('BlackSocks')} />
        <ColorBtn2 onClick={() => setActive('WhiteSocks')} />
        <ColorBtn3 onClick={() => setActive('BlueSocks')} />
        {/* </div> */}
        {active === 'BlackSocks' && <MainSocks src={data[0].color[0].image} />}
        {active === 'WhiteSocks' && <MainSocks src={data[0].color[1].image} />}
        {active === 'BlueSocks' && <MainSocks src={data[0].color[2].image} />}
      </>
    );
  }
};

export { Data };
