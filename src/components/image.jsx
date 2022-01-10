import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageItemStyle = styled.div`
  position: relative;
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

const ImageItem = ({ url, list, data, setData }) => {
  const ref = React.useRef();
  const [hover, setHover] = React.useState(false);
  const handleMouseHover = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  React.useEffect(() => {
    ref.current.addEventListener('mouseover', handleMouseHover);
    ref.current.addEventListener('mouseout', handleMouseOut);

    return (ref) => {
      ref.current.removeEventListener('hover', handleMouseHover);
      ref.current.removeEventListener('mouseout', handleMouseHover);
    };
  }, []);

  return (
    <ImageItemStyle ref={ref} url={url}>
      <MdClose
        onClick={() => {
          setData({
            ...data,
            image: [...data.image.filter((item) => item !== url)],
          });
        }}
        style={{
          display: `${hover ? 'block' : 'none'}`,
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          color: '#333',
        }}
      />
    </ImageItemStyle>
  );
};

const Image = ({ data, setData }) => {
  return (
    <ImageContainer>
      {data.image?.map((item, index) => (
        <ImageItem key={index} url={item} data={data} setData={setData} />
      ))}
    </ImageContainer>
  );
};

export default Image;
