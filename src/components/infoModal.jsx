import styled from 'styled-components';
import { Button } from './basic';

const InfoModalContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin-left: 50%;
  transform: translate(-50%);
  width: 600px;
  min-height: 200px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 4px #000;
`;

const InfoModal = ({ title, message, close }) => {
  return (
    <InfoModalContainer>
      <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>
        {title}
      </div>
      <div style={{ fontSize: '16px', fontWeight: 400 }}>{message}</div>
      <div
        style={{
          position: 'absolute',
          width: 'calc(600px - 40px)',
          bottom: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Button type="alert">확인</Button>
        <Button onClick={close}>취소</Button>
      </div>
    </InfoModalContainer>
  );
};

export { InfoModal };
