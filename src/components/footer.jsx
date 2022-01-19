import styled from 'styled-components';
import React from 'react';

const Footerbar = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  /* background-color: #fdfe; */
  /* padding-top: 30px; */
  /* border-top: 3px solid #bcbcbc; */
`;

const footer = () => {
  return (
    <Footerbar>
      <div style={{ width: '82.91vw', borderTop: '1px solid #bcbcbc' }}>
        <p
          style={{
            paddingTop: '20px',
            fontSize: '17px',
            fontWeight: 'bolder',
          }}
        >
          인진지코리아
        </p>
        <p
          style={{
            fontSize: '15px',
            color: '#666666',
            paddingTop: '18px',
            lineHeight: '200%',
          }}
        >
          대표자: 박원민 주소: 경기도 고양시 일산서구 일현로 97-11 (일산
          위브더제니스) 107동 2104호 (우: 10242)
          <br></br>사업자등록번호: 6595500516 &nbsp;&nbsp; 통신판매업신고:
          2019-고양일산서-0871
        </p>
        <span
          style={{
            display: 'inline-block',
            paddingTop: '20px',
            fontSize: '17px',
            fontWeight: 'bolder',
          }}
        >
          고객센터
        </span>
        <span
          style={{
            fontSize: '17px',
            fontWeight: 'bolder',
            color: '#B6181E',
            paddingLeft: '15px',
          }}
        >
          070-8095-2374
        </span>
        <p
          style={{
            fontSize: '15px',
            color: '#666666',
            paddingTop: '24px',
          }}
        >
          운영시간 : 09:00 ~ 18:00
        </p>
      </div>
    </Footerbar>
  );
};

export default footer;
