import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import React from 'react';

const DropdownContainer = styled.div`
  position: relative;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 1px solid #a4c9f5;
  background: #f9fcff;
  cursor: pointer;
  color: #333;
  &:hover {
    border: 1px solid #a0bcee;
  }
`;

const DropdownValue = styled.div`
  position: relative;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 12px;
  font-family: 'Noto Sans KR', serif;
  font-weight: 500;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  border-radius: 5px;
  background: #f9fcff;
  font-size: 12px;
  font-family: 'Noto Sans KR', serif;
  font-weight: 400;
  transform: translateY(30px);
  z-index: 10;
`;

const DropdownListItem = styled.div`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  &:hover {
    background: #a4c9f5;
  }
`;

const Dropdown = ({ value, list }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [nowValue, setValue] = React.useState(value);
  const ref = React.useRef();
  React.useEffect(() => {
    function handleClick() {
      console.log(ref.current);
      if (isOpen) {
        setOpen(false);
      }
    }
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [isOpen]);
  return (
    <DropdownContainer ref={ref} onClick={() => setOpen(true)}>
      <DropdownValue>{nowValue}</DropdownValue>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 0,
        }}
      >
        <MdOutlineKeyboardArrowDown color="#777" size={24} />
      </div>
      {isOpen ? (
        <DropdownList>
          {list.map((item, index) => (
            <DropdownListItem
              onClick={(e) => {
                setValue(e.target.innerText);
                setOpen(false);
              }}
              key={index}
            >
              {item}
            </DropdownListItem>
          ))}
        </DropdownList>
      ) : undefined}
    </DropdownContainer>
  );
};

export default Dropdown;
