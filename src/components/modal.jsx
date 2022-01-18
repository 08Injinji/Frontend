import React from 'react';
import styled from 'styled-components';
import { MdClose, MdOutlineAddCircleOutline } from 'react-icons/md';
import { Input, TextArea } from './basic';
import Image from './image';

// 모달 어두운 배경
const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(55, 55, 55, 0.3);
`;

// 실제 모달 컨테이너
const ModalContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 80vh;
  max-height: 800px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  background: #ff8e8e;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

// 배열 -> 폼데이터 변환 후 서버에 전송
const SubmitFormData = (data) => {
  console.dir(JSON.stringify({ ...data, image: '' }));
  const formData = new FormData();
  for (let i = 0; i < data.image.length; i++) {
    formData.append('image', data.image[i]);
  }
  formData.append(
    'data',
    JSON.stringify({
      ...data,
      image: '',
    }),
  );
  console.log(...formData);
  fetch('https://3.36.96.63/fetchtest/upload', {
    method: 'POST',
    body: formData,
  })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    // .then((json) => console.log(json))
    .catch((err) => console.warn(err));
};

// 모달 내부 색상 컴포넌트
const ColorItem = ({ index, data, setData }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '400px',
        height: '40px',
        borderRadius: '5px',
        background: '#f3f3f3',
        marginBottom: '5px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <MdClose
          onClick={(e) => {
            setData({
              ...data,
              color: [...data.color.filter((item, i) => i !== index)],
            });
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '200px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <input
            style={{
              width: '80px',
              outline: 'none',
              border: 'none',
              padding: ' 5px',
              borderRadius: '5px',
            }}
            placeholder="색상"
            value={data.color.filter((item, i) => i === index)[0].color}
            onChange={(e) => {
              setData({
                ...data,
                color: [
                  ...data.color.filter((item, i) => i !== index),
                  {
                    index: index,
                    color: e.target.value,
                    colorCode: data.color.filter((item, i) => i === index)[0]
                      .colorCode,
                    stock: data.color.filter((item, i) => i === index)[0].stock,
                  },
                ],
              });
            }}
          />
        </div>
        <div>
          <input
            style={{
              width: '80px',
              outline: 'none',
              border: 'none',
              padding: ' 5px',
              borderRadius: '5px',
            }}
            placeholder="색상 코드"
            value={data.color.filter((item, i) => i === index)[0].colorCode}
            onChange={(e) => {
              setData({
                ...data,
                color: [
                  ...data.color.filter((item, i) => i !== index),
                  {
                    index: index,
                    color: data.color.filter((item, i) => i === index)[0].color,
                    colorCode: e.target.value,
                    stock: data.color.filter((item, i) => i === index)[0].stock,
                  },
                ],
              });
            }}
          />
        </div>
        <div>
          <input
            style={{
              width: '80px',
              outline: 'none',
              border: 'none',
              padding: ' 5px',
              borderRadius: '5px',
            }}
            placeholder="재고 입력"
            value={data.color.filter((item, i) => i === index)[0].stock}
            onChange={(e) => {
              setData({
                ...data,
                color: [
                  ...data.color.filter((item, i) => i !== index),
                  {
                    index: index,
                    color: data.color.filter((item, i) => i === index)[0].color,
                    colorCode: data.color.filter((item, i) => i === index)[0]
                      .colorCode,
                    stock: parseInt(e.target.value, 10),
                  },
                ],
              });
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: `${
            data.color.filter((item, i) => i === index)[0].colorCode
          }`,
        }}
      ></div>
    </div>
  );
};

// const ReadImageUrl = (files, urlList, setUrlList) => {
//   if (!files) return false;
//   const reader = new FileReader();

//   reader.onload = () => {
//     setUrlList([...urlList, reader.result]);
//   };

//   reader.readAsDataURL(files);
// };

const Modal = ({ givenData, setModalOpen, setModifying }) => {
  React.useEffect(() => {
    if (givenData !== undefined) {
      console.log(givenData[0]);
    }
  });
  const [data, setData] = React.useState({
    name: `${givenData !== undefined ? givenData[0].name : ''}`,
    price: `${givenData !== undefined ? givenData[0].price : ''}`,
    size: `${givenData !== undefined ? givenData[0].size : ''}`,
    color:
      givenData !== undefined && givenData[0].color !== undefined
        ? [...givenData[0].color]
        : [],
    image: givenData !== undefined ? givenData[0].image : [],
    description: `${givenData !== undefined ? givenData[0].description : ''}`,
  });
  return (
    <ModalBackground>
      <ModalContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '30px',
          }}
        >
          <div style={{ fontSize: '18px' }}>상품 정보</div>
          <div>
            <MdClose
              onClick={() => {
                setModalOpen(false);
                setModifying(false);
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div style={{ height: 'calc(100% - 80px)', overflowY: 'auto' }}>
          <div
            style={{
              display: 'flex',
              height: '50px',
              alignItems: 'center',
              marginTop: '30px',
              gap: '10px',
            }}
          >
            <div
              style={{
                flex: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60px',
                  height: '30px',
                  background: '#ff8e8e',
                  borderRadius: '5px 0px 0px 5px',
                  fontSize: '12px',
                }}
              >
                상품명
              </div>
              <div style={{ flex: 3 }}>
                <Input
                  placeholder="상품명을 입력해주세요."
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  width="100%"
                />
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '50px',
                  height: '30px',
                  display: 'flex',
                  background: '#ff8e8e',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '5px 0px 0px 5px',
                  fontSize: '12px',
                }}
              >
                가격
              </div>
              <div>
                <Input
                  placeholder="가격 입력"
                  width="80%"
                  value={data.price}
                  onChange={(e) =>
                    setData({ ...data, price: parseInt(e.target.value, 10) })
                  }
                />
                <span style={{ marginLeft: '10px', fontSize: '14px' }}>원</span>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '50px',
                  height: '30px',
                  display: 'flex',
                  background: '#ff8e8e',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '5px 0px 0px 5px',
                  fontSize: '12px',
                }}
              >
                사이즈
              </div>
              <div>
                <Input
                  placeholder="사이즈 입력"
                  width="80%"
                  value={data.size}
                  onChange={(e) => setData({ ...data, size: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}
          >
            <div>색상</div>
            <div
              onClick={() => {
                console.log(data.color);
                setData({
                  ...data,
                  color: [
                    ...data.color,
                    {
                      index:
                        data.color.length === 0
                          ? 1
                          : data.color[data.color.length - 1].index + 1,
                      color: '',
                      colorCode: '',
                      stock: '',
                    },
                  ],
                });
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: '#565656',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            >
              <MdOutlineAddCircleOutline />
              색상 추가
            </div>
          </div>
          <div
            style={{
              width: '100%',
              minHeight: '50px',
              marginTop: '30px',
            }}
          >
            {data.color.length !== 0 ? (
              data.color.map((item, index) => (
                <ColorItem
                  key={index}
                  index={index}
                  color={item.color}
                  colorCode={item.colorCode}
                  stock={item.stock}
                  data={data}
                  setData={setData}
                />
              ))
            ) : (
              <div style={{ fontSize: '12px' }}>색상을 추가해주세요!</div>
            )}
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}
          >
            <div>상품이미지</div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: '#565656',
                marginLeft: '20px',
              }}
            >
              <label
                htmlFor="chooseFile"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <MdOutlineAddCircleOutline />
                이미지 추가
              </label>
              <input
                onChange={(e) => {
                  //   ReadImageUrl(e.target.files[0], imageArea, data, setData);
                  setData({
                    ...data,
                    image: [...data.image, e.target.files[0]],
                  });
                  //   ReadImageUrl(e.target.files[0], urlList, setUrlList);
                }}
                id="chooseFile"
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
              />
            </div>
          </div>

          <Image data={data} setData={setData} />

          <div style={{ marginTop: '30px' }}>
            <div>상세설명</div>
            <div style={{ marginTop: '30px' }}>
              <TextArea
                spellCheck={false}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                value={data.description}
                width="100%"
                height="150px"
              />
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', bottom: 0, height: '50px' }}>
          <Button
            style={{ position: 'absolute', right: 0 }}
            onClick={() => {
              SubmitFormData(data);
              setModalOpen(false);
            }}
          >
            저장
          </Button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
