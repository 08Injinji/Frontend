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
import Modal from '../components/modal';

const Container = styled.div`
  width: 100%;
`;

const Control = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const Table = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

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

let SAMPLE_DATA = [
  {
    number: 1,
    name: 'product 1',
    price: 8500,
    image: ['image_link', '', '', ''],
    // color: ['white', 'red', 'black'],
    description: 'description 1',
    stock: 994,
  },
  {
    number: 2,
    name: 'product 2',
    price: 11500,
    image: 'image_link',
    description: 'description 2',
    stock: 4,
  },
  {
    number: 3,
    name: 'product 3',
    price: 15500,
    image: 'image_link',
    description: 'description 3',
    stock: 92,
  },
  {
    number: 4,
    name: 'product 4',
    price: 9500,
    image: 'image_link',
    description: 'description 4',
    stock: 112,
  },
];

const Item = ({
  number,
  name,
  price,
  image,
  description,
  stock,
  checkedList,
  setCheckedList,
}) => {
  return (
    <ItemStyle
      onClick={() => {
        // 만약 isCheck가 true이면 클릭이 된 상태에서 다시 체크해제하는 것이므로 상태배열에서 제거해야함
        if (checkedList.filter((item) => item === number).length === 1) {
          setCheckedList([...checkedList].filter((item) => item !== number));
        } else {
          setCheckedList([...checkedList, number]);
        }
      }}
    >
      <div style={{ width: '30px' }}>
        {checkedList.filter((item) => item === number).length === 1 ? (
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
      <div style={{ width: '100px' }}>{stock}</div>
    </ItemStyle>
  );
};

// 상품 리스트에서 제거
function removeItem(checkedList, setCheckedList) {
  SAMPLE_DATA = SAMPLE_DATA.filter(
    (item) => checkedList.indexOf(item.number) === -1,
  );
  setCheckedList([]);
}

const Admin1 = () => {
  const [checkedList, setCheckedList] = React.useState([]);
  console.log(checkedList);
  return (
    <Container>
      <Control>
        <div
          style={{ visibility: `${checkedList.length ? 'visible' : 'hidden'}` }}
        >
          <MdOutlineEdit size={20} color="#686868" />
          <MdDelete
            onClick={() => removeItem(checkedList, setCheckedList)}
            style={{ marginLeft: '10px' }}
            size={20}
            color="#686868"
          />
        </div>
        <div>
          <MdAddCircleOutline size={20} color="#686868" />
        </div>
      </Control>
      <Table>
        <Header>
          <div style={{ width: '30px' }}>
            <MdCheck
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (checkedList.length === SAMPLE_DATA.length) {
                  setCheckedList([]);
                } else {
                  setCheckedList([
                    ...SAMPLE_DATA.map((element) => element.number),
                  ]);
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
          <div style={{ width: '100px' }}>재고</div>
        </Header>
        {SAMPLE_DATA.map((item) => {
          return (
            <Item
              key={item.number}
              number={item.number}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              stock={item.stock}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
          );
        })}
      </Table>
      <Modal />
    </Container>
  );
};

export default Admin1;
