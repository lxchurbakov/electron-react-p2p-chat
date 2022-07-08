import React from 'react';
import styled, { css } from 'styled-components';

import { Text } from '/components/text';
import Input from '/components/input';

import { PropsOf } from '/libs/utils';

const LIGHT_BLUE = '#e2edf9';

const Wrap = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: white;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #eee;
  max-height: 500;
  overflow-y: auto;
`;

const Option = styled(Text)<{ selected: boolean }>`
  padding: 12px;
  cursor: pointer;

  ${props => props.selected && css`
    background: ${LIGHT_BLUE};
  `};
`;

const inRange = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export type Props = {
  value: string | null;
  onChange: (value: string | null) => void;
  options: { value: string | null, label: string, view?: React.ReactNode }[];
  placeholder?: string;
};

export default ({ value, onChange, options, placeholder, ...props }: Props) => {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const updateSelected = React.useCallback((diff: number) => setSelected((s) => inRange(s + diff, 0, options.length - 1)), [options, setSelected]);

  const view = React.useMemo(() => options.find((option) => option.value === value)?.label || '', [value]);

  const navigate = React.useCallback((e) => {
    if (e.code === 'Enter') {
      if (show) {
        onChange(options[selected].value);
        setShow(false);
      } else {
        setShow(true)
      }
    }

    if (e.code === 'ArrowUp') {
      updateSelected(-1);
    }

    if (e.code === 'ArrowDown') {
      updateSelected(1)
    }
  }, [onChange, options, selected, updateSelected, show, setShow]);

  return (
    <Wrap {...props}>
      <Input onKeyDown={navigate} placeholder={placeholder} onFocus={() => setShow(true)} onBlur={() => setTimeout(() => setShow(false), 200)} value={view} onChange={() => {}} />

      {show && (
        <Dropdown>
          {options.map((option, index) => (
            <Option selected={selected === index} onMouseOver={() => setSelected(index)} key={option.value} onClick={() => onChange(option.value)}>{option.view || option.label}</Option>
          ))}
        </Dropdown>
      )}

    </Wrap>
  );
};
