import React from 'react';
import styled from 'styled-components';
import {
  MdAddCircleOutline,
  MdPanoramaFishEye,
  MdCheckCircle,
  MdDelete,
  MdOutlineEdit,
  MdCheck,
} from 'react-icons/md';
import Skeleton from '@mui/material/Skeleton';
import Modal from '../../components/modal';
import { request } from '../../apis';

const Container = styled.div`
  width: 100%;
`;

// 상단 컨트롤 패널
const Control = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
`;

// 리스트 테이블 컨테이너
const Table = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// 테이블 헤더
const Header = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: #777;
  border-bottom: 1px solid #f2f2f2;
`;

// 상품 개별 아이템 컨테이너
const ItemStyle = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
`;

// 상품 정보 컴포넌트
const Item = ({
  number,
  name,
  price,
  image,
  description,
  size,
  checkedList,
  setCheckedList,
}) => {
  return (
    <ItemStyle
      onClick={() => {
        // 만약 isCheck가 true이면 클릭이 된 상태에서 다시 체크해제하는 것이므로 상태배열에서 제거해야함
        if (checkedList.filter((item) => item === name).length === 1) {
          setCheckedList([...checkedList].filter((item) => item !== name));
        } else {
          setCheckedList([...checkedList, name]);
        }
      }}
    >
      <div style={{ width: '30px' }}>
        {checkedList.filter((item) => item === name).length === 1 ? (
          <MdCheckCircle size={15} color="#41B97F" />
        ) : (
          <MdPanoramaFishEye size={15} color="#bcbcbc" />
        )}
      </div>
      <div style={{ width: '30px' }}>{number}</div>
      <div style={{ width: '150px' }}>{name}</div>
      <div style={{ width: '100px' }}>{price}</div>
      <div style={{ width: '150px' }}>{image}</div>
      <div style={{ width: '200px' }}>{description}</div>
      <div style={{ width: '100px' }}>{size}</div>
    </ItemStyle>
  );
};

// 상품 관리 전체 페이지 컴포넌트
const Admin1 = () => {
  const [data, setData] = React.useState();
  const [isDataLoading, setDataLoading] = React.useState(true);
  const [checkedList, setCheckedList] = React.useState([]);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isModifying, setModifying] = React.useState(false);

  async function GetItemData() {
    const res = await request('/fetchtest/fetchAll');
    setData(res)
  }

  async function RemoveItems() {
    await request('/fetchtest/deleteArray', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        deleteList: [...checkedList],
      })
    })
    GetItemData()
  }
  // 서버에서 데이터 받아오기
  React.useEffect(() => {
    async function fetchAll() {
      const res = await request('/fetchtest/fetchAll');
      setData(res);
      setDataLoading(false);
    }
    fetchAll()
    return () => {
      setData();
      setDataLoading(false);
    }
  }, []);
  return (
    <Container>
      <Control>
        <div
          style={{ visibility: `${checkedList.length ? 'visible' : 'hidden'}` }}
        >
          <MdOutlineEdit
            onClick={() => {
              setModalOpen(true);
              setModifying(true);
            }}
            style={{
              display: `${checkedList.length === 1 ? 'inline-block' : 'none'}`,
              cursor: 'pointer',
            }}
            size={20}
            color="#686868"
          />
          <MdDelete
            onClick={() => {
              // removeItem(checkedList, setCheckedList, data, setData)
              RemoveItems();
            }}
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            size={20}
            color="#686868"
          />
        </div>
        <div>
          <MdAddCircleOutline
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'pointer' }}
            size={20}
            color="#686868"
          />
        </div>
      </Control>
      <Table>
        <Header>
          <div style={{ width: '30px' }}>
            <MdCheck
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (checkedList.length === data.length) {
                  setCheckedList([]);
                } else {
                  setCheckedList([...data.map((item) => item.name)]);
                }
              }}
              size={15}
              color="#bcbcbc"
            />
          </div>
          <div style={{ width: '30px' }}>번호</div>
          <div style={{ width: '150px' }}>상품명</div>
          <div style={{ width: '100px' }}>가격</div>
          <div style={{ width: '150px' }}>상품이미지</div>
          <div style={{ width: '200px' }}>상세설명</div>
          <div style={{ width: '100px' }}>사이즈</div>
        </Header>
        {!isDataLoading ? (
          data.map((item, index) => {
            return (
              <Item
                key={index}
                number={index + 1}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                size={item.size}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
              />
            );
          })
        ) : (
          <div>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100%"
              height={50}
              style={{ marginBottom: '10px', borderRadius: '5px' }}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100%"
              height={50}
              style={{ marginBottom: '10px', borderRadius: '5px' }}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100%"
              height={50}
              style={{ borderRadius: '5px' }}
            />
          </div>
        )}
      </Table>
      {isModalOpen ? (
        <Modal
          givenData={
            isModifying
              ? data.filter((item) => item.name === checkedList[0])
              : undefined
          }
          setModifying={setModifying}
          setModalOpen={setModalOpen}
          GetItemData={GetItemData}
        />
      ) : undefined}
    </Container>
  );
};

export default Admin1;
