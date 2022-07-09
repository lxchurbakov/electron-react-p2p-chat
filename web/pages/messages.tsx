import React from 'react';

import Input from '/components/input';

import Flex from '/components/flex';
import Button from '/components/button';

import { Subheading, Label, Text } from '/components/text';

import p2pnode from '/libs/p2pnode';
import useName from '/libs/useName';

export default () => {
  const [name] = useName();

  const [heading, setHeading] = React.useState('p2pchat');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([{
    message: {
      type: 'system',
      meta: (
        <>
          Use <a onClick={() => setMessage('/connect 127.0.0.1:8090')}>/connect 127.0.0.1:8090</a> command to connect to other nodes.
        </>
      )
    },
  }] as any[]);

  const containerRef = React.useRef<any>();

  React.useEffect(() => {
    return p2pnode.onMessage((data) => {
      setMessages((m) => m.concat([data]));

      setTimeout(() => {
        const scrollingElement = containerRef.current;

        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }, 100);
    });
  }, [setMessages]);

  const send = React.useCallback(() => {
    if (message.startsWith('/connect')) {
      const [,address] = message.split(' ');
      const [ip, port] = address.split(':');

      p2pnode.connect({ ip, port }).then(() => {
        setMessage('');
        p2pnode.send({ type: 'connect', meta: name });
      });
    } else {
      p2pnode.send({ type: 'simple', meta: { name,message } });
      setMessage('');
    }
  }, [message, setMessage]);

  const handleKeyDown = React.useCallback((e: any) => {
    if (e.code === 'Enter') {
      send();
    }
  }, [send]);

  return (
    <Flex direction="column" style={{ height: '100%', padding: 12 }}>
      <Subheading style={{ marginBottom: 24 }}>{heading}</Subheading>

      <div style={{ width: '100%', height: '100%', overflowY: 'auto' }} ref={containerRef}>
        {messages.map(({message}: any) => {
          if (message.type === 'system') {
            return (
              <div style={{ marginBottom: 24, opacity: .5 }}>
                <Text>{message.meta}</Text>
              </div>
            );
          }

          if (message.type === 'connect') {
            return (
              <div style={{ marginBottom: 24, opacity: .5 }}>
                <Text>{message.meta} has joined the chat.</Text>
              </div>
            );
          }

          if (message.type === 'simple') {
            return (
              <Flex gap={12} justify="flex-start" style={{ marginBottom: 24 }} align="flex-start">
                <img src="https:////notarealhuman.com/face" style={{ width: 40, height: 40, borderRadius: 8 }} />

                <div>
                  <Label style={{ marginBottom: 4 }}>{message.meta.name}</Label>
                  <Text>{message.meta.message}</Text>
                </div>
              </Flex>
            );
          }
        })}
      </div>

      <Flex gap={12}>
        <Input placeholder="Your message" value={message} onChange={setMessage} onKeyDown={handleKeyDown}/>
        <Button onClick={send}>Send</Button>
      </Flex>
    </Flex>
  );
};
