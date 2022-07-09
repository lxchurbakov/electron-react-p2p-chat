import styled, { css } from 'styled-components';

export default styled.button<{ disabled?: boolean }>`
  padding: 12px 24px;

  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;

  cursor: pointer;
  position: relative;
  top: 0;

  background: #6c6dff;
  border: none;
  color: white;

  &:active {
    top: 1px;
  }

  ${props => props.disabled && css`
    opacity: .5;
    pointer-events: none;
  `};
`;