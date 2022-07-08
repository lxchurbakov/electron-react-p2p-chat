import styled from 'styled-components';

const LIGHT_BLUE = '#e2edf9';

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 4px 0px rgba(0,0,0,.1);
`;

export const FlatCard = styled.div`
  background: ${LIGHT_BLUE};
  border-radius: 8px;
`;
