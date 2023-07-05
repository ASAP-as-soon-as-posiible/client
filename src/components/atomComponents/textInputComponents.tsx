import { styled } from 'styled-components';

function TextInputComponents() {
  return (
    <>
      <TextInput placeholder="서비스 기획 1차 회의" />
    </>
  );
}

export default TextInputComponents;

const TextInput = styled.input`
  width: 303px;
  padding: 10px 16px;
  height: 20px;

  border-radius: 8px;
  border: 2px solid #000;
  background: var(--asap-neutral-grey-7, #3f3f3f);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  caret-color: #3c49ff;

  &:focus {
    outline: none;
    border: 2px solid #3c49ff;
  }
`;