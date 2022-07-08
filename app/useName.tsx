import React from 'react';
import { useBetween } from 'use-between';

const _useName = () => {
  return React.useState('');
};

export default () => useBetween(_useName);