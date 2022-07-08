import React from 'react';
import styled from 'styled-components';

import { useListener } from '/libs/hooks';

const Wrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.7);
`;

export default ({ children, onClose }: { children: React.ReactNode, onClose: () => void }) => {
  useListener(window, 'keydown', (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose();
    }
  }, []);

  return (
    <Wrap>
      {children}
    </Wrap>
  );
};
