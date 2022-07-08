import styled from 'styled-components';

export type Alignment = 'center' | 'flex-start' | 'flex-end';
export type Justification = 'space-between' | 'space-around';

export type Props = {
  direction?: 'row' | 'column';
  gap?: number;
  align?: Alignment;
  justify?: Alignment | Justification;
  wrap?: boolean;
};

export default styled.div<Props>`
  flex-wrap: ${props => !!props.wrap ? 'wrap' : 'nowrap'};
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || 0}px;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  box-sizing: border-box;
`;
