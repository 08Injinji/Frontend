import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bcbcbc;
  cursor: pointer;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <div
          style={{ fontFamily: 'Roboto', fontSize: '48px', fontWeight: 'bold' }}
        >
          Not Found
        </div>
        <div
          style={{
            marginTop: '20px',
            fontFamily: 'Noto Sans KR',
            fontWeight: 300,
          }}
        >
          페이지를 찾을 수 없습니다. 주소를 다시 한번 확인해주세요.
        </div>
        <div
          style={{
            fontFamily: 'Noto Sans KR',
            fontWeight: 300,
          }}
        >
          이전 페이지로 이동하거나 홈으로 이동해주세요.
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '20px',
            width: '220px',
            justifyContent: 'space-between',
          }}
        >
          <Button onClick={() => navigate(-1, { replace: true })}>
            이전으로
          </Button>
          <Button onClick={() => navigate('/', { replace: true })}>
            홈으로
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default NotFound;
