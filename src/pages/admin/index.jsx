import styled from 'styled-components';

const AdminMainComponent = styled.div`
  position: relative;
  width: 100%;
`;

const AdminMainVerticalSection = styled.div`
  width: 100%;
  height: 300px;
`;

const AdminMain = () => {
  return (
    <AdminMainComponent>
      <AdminMainVerticalSection>1</AdminMainVerticalSection>
      <AdminMainVerticalSection>2</AdminMainVerticalSection>
      <AdminMainVerticalSection>3</AdminMainVerticalSection>
    </AdminMainComponent>
  );
};

export default AdminMain;
