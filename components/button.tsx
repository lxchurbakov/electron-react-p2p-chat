import styled from 'styled-components';

export default styled.button`
  padding: 12px 24px;

  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;

  cursor: pointer;
  position: relative;
  top: 0;

  // background: none;
  // border: 1px solid #6c6dff;
  // color: #6c6dff;
  background: #6c6dff;
  border: none;
  color: white;

  &:active {
    top: 1px;
  }
`;