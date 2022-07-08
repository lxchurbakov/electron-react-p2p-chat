import styled, { css } from 'styled-components';

export default styled.div<{ color: string, clickable?: boolean }>`
  min-width: 48px;
  height: 48px;
  border-radius: 48px;

  background: ${props => props.color};

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  ${props => props.clickable && css`
    cursor: pointer;

    &:active {
      transform: translateY(1px);
    }
  `};
`;
