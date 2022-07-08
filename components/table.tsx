import styled from 'styled-components';

import { Text, Sup } from '/components/text';

export const HeaderRow = styled.div`
  display: flex;
`;

export const HeaderItem = styled(Sup)<{ width?: string }>`
  padding: 12px;
  width: ${props => props.width || '100%'};
`;

export const Row = styled.div`
  display: flex;

  &:nth-child(2n) {
    background: #F8FAFB;
    border-radius: 8px;
  }
`;

export const Item = styled(Text)<{ width?: string }>`
  padding: 12px;
  width: ${props => props.width || '100%'};

  // &:first-child {
  //   padding-left: 0;
  // }
  // &:last-child {
  //   padding-right: 0;
  // }
`;
