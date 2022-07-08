import styled, { css } from 'styled-components';

const TEXT_COLOR = '#21224e';

const Base = styled.div<{ bold?: boolean }>`
  font-family: 'Sofia Pro', sans-serif;
  letter-spacing: .2px;
  ${props => props.bold && css`font-weight:bold`};
`;

export const Heading = styled(Base)`
  font-weight: bold;
  font-size: 28px;
  color: ${TEXT_COLOR};
`;

export const Subheading = styled(Base)`
  font-weight: bold;
  font-size: 22px;
  color: ${TEXT_COLOR};
`;

export const Label = styled(Base)`
  font-size: 18px;
  color: ${TEXT_COLOR};
`;

export const Text = styled(Base)`
  font-size: 16px;
  color: ${TEXT_COLOR};
`;

export const Sup = styled(Base)`
  font-size: 14px;
  color: ${TEXT_COLOR};
`;
