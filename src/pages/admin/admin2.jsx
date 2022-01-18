import styled from 'styled-components';
import Dropdown from '../../components/dropdown';

const ACCOUNT_LIST = [
  {
    email: 'admin1@naver.com',
    level: '모든 권한',
    last: JSON.stringify(new Date()),
  },
  {
    email: 'admin2@naver.com',
    level: '모든 권한',
    last: JSON.stringify(new Date()),
  },
  {
    email: 'admin3@naver.com',
    level: '모든 권한',
    last: JSON.stringify(new Date()),
  },
];

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, 120px);
  gap: 10px;
  width: 100%;
`;

const AccountItemStyle = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background: #fcfcfc;
  box-shadow: 0px 5px 5px #999;
  border-radius: 5px;
  padding: 10px;
`;

const AccountItem = ({ email, level, last }) => {
  return (
    <AccountItemStyle>
      <div>{email}</div>
      <Dropdown value={level} list={['모든 권한', '쓰기', '읽기']} />
      <div style={{ position: 'absolute', bottom: 5, fontSize: '12px' }}>
        {last}
      </div>
    </AccountItemStyle>
  );
};

const Admin2 = () => {
  return (
    <Container>
      <div
        style={{ fontSize: '18px', fontWeight: '600', marginBottom: '50px' }}
      >
        관리자 계정
      </div>
      <AccountContainer>
        {ACCOUNT_LIST.map((item, index) => (
          <AccountItem
            key={index}
            email={item.email}
            level={item.level}
            last={item.last}
          ></AccountItem>
        ))}
      </AccountContainer>
    </Container>
  );
};

export default Admin2;
