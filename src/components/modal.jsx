import React from 'react';
import styled from 'styled-components';
import { MdClose, MdOutlineAddCircleOutline } from 'react-icons/md';
import { Input, TextArea } from './basic';
import Image from './image';

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
`;

const SubmitFormData = (data) => {
  console.log(...data.image);
  const formData = new FormData();
  formData.append('image', data.image);
  formData.append(
    'data',
    JSON.stringify({
      ...data,
      image: '',
    }),
  );

  fetch('https://3.36.96.63/fetchtest/upload', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};

const ColorItem = ({ index, data, setData }) => {
  //   const [color, setColor] = React.useState({
  //     color: '',
  //     hexCode: '',
  //   });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '300px',
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
              color: [...data.color.filter((item) => item.index !== index)],
            });
            // console.log(...data.color.filter((item) => item.index !== index));
            // console.log(data.color.map((item) => item.index));
            // console.log(index);
          }}
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
            value={data.color.filter((item) => item.index === index).color}
            onChange={(e) => {
              setData({
                ...data,
                color: [
                  ...data.color.filter((item) => item.index !== index),
                  {
                    index: index,
                    color: e.target.value,
                    colorcode: data.color.filter(
                      (item) => item.index === index,
                    )[0].colorcode,
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
            value={data.color.filter((item) => item.index === index).colorcode}
            onChange={(e) => {
              setData({
                ...data,
                color: [
                  ...data.color.filter((item) => item.index !== index),
                  {
                    index: index,
                    color: data.color.filter((item) => item.index === index)[0]
                      .color,
                    colorcode: e.target.value,
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
            data.color.filter((item) => item.index === index)[0].colorcode
          }`,
        }}
      ></div>
    </div>
  );
};

const ReadImageUrl = (files, urlList, setUrlList) => {
  if (!files) return false;
  const reader = new FileReader();

  reader.onload = () => {
    setUrlList([...urlList, reader.result]);
  };

  reader.readAsDataURL(files);
};

const AddToFormData = (files) => {
  const formData = new FormData();
  formData.append('image', files);

  // 서버에 이미지 전송
  //   fetch('https://3.36.96.63/fetchtest/upload', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  formData.get('image');
  //   for (let value of formData.values()) {
  //     console.log(value);
  //   }
};

const AddToImageArray = (imageFileList, setImageFileList, file) => {
  console.log(file);
  setImageFileList([...imageFileList, file]);
};

const Modal = () => {
  const imageArea = React.useRef();
  const [urlList, setUrlList] = React.useState([]);
  const [data, setData] = React.useState({
    name: '',
    price: '',
    stock: '',
    color: [],
    image: [],
    description: '',
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
          <div>상품 정보</div>
          <div>
            <MdClose />
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
              <div style={{ width: '60px' }}>상품명</div>
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
              <div style={{ width: '50px' }}>가격</div>
              <div>
                <Input
                  placeholder="가격 입력"
                  width="80%"
                  value={data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                />
                <span style={{ marginLeft: '10px', fontSize: '14px' }}>원</span>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '50px' }}>재고</div>
              <div>
                <Input
                  placeholder="재고 입력"
                  width="80%"
                  value={data.stock}
                  onChange={(e) => setData({ ...data, stock: e.target.value })}
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
                      colorcode: '',
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
            {data.color.length !== 0
              ? data.color.map((item) => (
                  <ColorItem
                    key={item.index}
                    index={item.index}
                    data={data}
                    setData={setData}
                  />
                ))
              : '색상을 추가해주세요!'}
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
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                width="100%"
                height="150px"
              />
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', bottom: 0, height: '50px' }}>
          <Button
            style={{ position: 'absolute', right: 0 }}
            onClick={() => SubmitFormData(data)}
          />
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
