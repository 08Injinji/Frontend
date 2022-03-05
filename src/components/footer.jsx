import styled from 'styled-components';
import React from 'react';

const Footerbar = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  @media ${({ theme }) => theme.device.mobile} {
    line-height: 1.3;
    height: 200px;
  }
`;

const FootP1 = styled.p`
  font-size: 17px;
  padding-top: 20px;
  font-weight: bolder;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
    padding-top: 10px;
  }
`;

const FootP2Desktop = styled.p`
  font-size: 0.8em;
  color: #666666;
  padding-top: 20px;
  line-height: 200%;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const FootP2Mobile = styled.p`
  color: #666666;
  line-height: 150%;
  padding-top: 20px;
  font-size: 0.7rem;
  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;

const FootP3 = styled.p`
  font-size: 15px;
  color: #666666;
  padding-top: 24px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;
    padding-top: 10px;
  }
`;

const FootSpan1 = styled.span`
  display: inline-block;
  padding-top: 20px;
  font-size: 17px;
  font-weight: bolder;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
`;

const FootSpan2 = styled.span`
  font-size: 17px;
  font-weight: bolder;
  color: #b6181e;
  padding-left: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 15px;
  }
`;

const footer = () => {
  return (
    <Footerbar>
      <div style={{ width: '82.91vw', borderTop: '1px solid #bcbcbc' }}>
        <FootP1>인진지코리아</FootP1>
        <FootP2Desktop>
          대표자: 박원민 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주소: 경기도 고양시
          일산서구 일현로 159 4층 좌측 injinji
          <br></br>사업자등록번호: 659-55-00516&nbsp;통신판매업신고:
          2019-고양일산서-0871
        </FootP2Desktop>
        <FootP2Mobile>
          대표자: 박원민<br></br>주소: 경기도 고양시 일산서구 일현로 159 4층
          좌측 injinji
          <br></br>사업자등록번호: 659-55-00516<br></br>통신판매업신고:
          2019-고양일산서-0871
        </FootP2Mobile>
        <FootSpan1>고객센터</FootSpan1>
        <FootSpan2>070-8095-2374</FootSpan2>
        <FootP3>운영시간 : 09:00 ~ 18:00</FootP3>
      </div>
    </Footerbar>
  );
};

export default footer;
