import React from 'react';
import styled from 'styled-components';

import { Text } from '/components/text';
import Flex from '/components/flex';

import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';

const LIGHT_BLUE = '#e2edf9';

const Wrap = styled(Flex)`
  width: auto;
`;

const Page = styled(Text)`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background: ${LIGHT_BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default () => {
  return (
    <Wrap gap={8}>
      <Page><ArrowLeftShort height={20} /></Page>
      <Page>29</Page>
      <Page bold>29</Page>
      <Page>30</Page>
      <Page><ArrowRightShort height={20}/></Page>
    </Wrap>
  );
};
