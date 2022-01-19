import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '30px'};
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  padding-left: 10px;
`;

const TextArea = styled.textarea`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  resize: none;
  outline: none;
  font-family: 'Noto Sans KR';
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export { Input, TextArea };
