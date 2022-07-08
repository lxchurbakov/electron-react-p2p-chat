import React from 'react';
import styled from 'styled-components';

import { PropsOf } from '/libs/utils';

const PRIMARY_COLOR = '#6c6dff';

const Wrap = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  display: block;
  width: 100%;
  padding: 14px 18px 12px 18px;
  box-sizing: border-box;
  font-family: 'Sofia Pro', sans-serif;
  letter-spacing: .2px;
  font-size: 16px;

  &:focus {
    outline: 1px solid ${PRIMARY_COLOR};
  }
`;

export type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

export default ({ value, onChange, placeholder, onFocus, onBlur, ...props }: Props & Partial<PropsOf<typeof Wrap>>) => {
  return (
    <Wrap {...props}>
      <Input placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value || '')} onFocus={onFocus} onBlur={onBlur} />
    </Wrap>
  );
};
