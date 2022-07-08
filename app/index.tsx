import React from 'react';
import ReactDOM from 'react-dom/client';

import Authenticate from './authenticate';
import Messages from './messages';

const node = document.getElementById('app') as any;

document.body.style.overflow = 'hidden';

node.style.width = '100vw';
node.style.height = '100vh';
node.style.display = 'flex';
node.style.flexDirection = 'column';
node.style.alignItems = 'center';
node.style.justifyContent = 'center';

const root = ReactDOM.createRoot(node);

root.render(
  <Authenticate>
    <Messages />
  </Authenticate>
);
