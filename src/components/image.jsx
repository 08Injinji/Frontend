import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ImageContainer = styled.div`
  //   display: flex;
  //   align-items: center;
  position: relative;
  white-space: nowrap;
  height: 210px;
  overflow: auto;
`;

const ImageItemStyle = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  background-image: url('${(props) => props.url}');
  background-size: contain;
  background-origin: center center;
  background-repeat: no-repeat;
  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.1);
  }
`;

const ImageItem = ({ file, name, link, data, setData }) => {
  // 이미지 아이템의 핵심은 dataUrl과 서버에서 받아온 url을 구분해서 표현해줘야함.
  const ref = React.useRef();
  const [hover, setHover] = React.useState(false);
  //   const [url, setUrl] = React.useState(file ? '' : link);
  const handleMouseHover = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  React.useEffect(() => {
    ref.current.addEventListener('mouseover', handleMouseHover);
    ref.current.addEventListener('mouseout', handleMouseOut);

    // return () => {
    //   ref.current.removeEventListener('mouseover', handleMouseHover);
    //   ref.current.removeEventListener('mouseout', handleMouseOut);
    // };
  }, []);

  return (
    <ImageItemStyle ref={ref} url={link}>
      <MdClose
        onClick={() => {
          setData({
            ...data,
            image: [...data.image.filter((item) => item.name !== name)],
          });
        }}
        style={{
          display: `${hover ? 'block' : 'none'}`,
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          color: '#999',
        }}
      />
    </ImageItemStyle>
  );
};

const Image = ({ data, setData }) => {
  return (
    <ImageContainer>
      <div style={{ height: '100%' }}>
        {data.preview.map((item, index) => (
          <ImageItem
            key={index}
            //   link={item.image}
            //   name={item.name}
            link={item}
            data={data}
            setData={setData}
          />
        ))}
      </div>
    </ImageContainer>
  );
};

export default Image;
