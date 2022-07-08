import React from 'react';

import Input from '/components/input';

import Flex from '/components/flex';
import Button from '/components/button';

import { Card } from '/components/card';
import { Heading, Subheading, Label, Text, Sup } from '/components/text';

import p2pnode from './p2pnode';

export default () => {
  const [messages, setMessages] = React.useState([] as any[]);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    return p2pnode.onMessage((data) => {
      setMessages((m) => m.concat([data]));
    });
  }, [setMessages]);

  const send = () => {
    if (message.startsWith('/connect')) {
      const [,address] = message.split(' ');
      const [ip, port] = address.split(':');

      p2pnode.connect({ ip, port }).then(() => {
        setMessage('');
        p2pnode.send({ type: 'connect', meta: null });
      });
    } else {
      p2pnode.send({ type: 'simple', meta: message });
      setMessage('');
    }
  };

  console.log(messages)

  return (
    <>
      <Heading style={{ marginBottom: 24 }}>Messenger</Heading>

      <Card style={{ padding: 12, paddingTop: 24 }}>
        <Subheading style={{ marginBottom: 24 }}>P2P Chat</Subheading>

        <div style={{ minHeight: 400, overflowY: 'auto' }}>
          {messages.map(({message}: any) => {
            if (message.type === 'connect') {
              return (
                <div style={{ marginBottom: 24, opacity: .5 }}>
                  <Text>Someone has joined the chat.</Text>
                </div>
              );
            }

            if (message.type === 'simple') {
              return (
                <Flex gap={12} justify="flex-start" style={{ marginBottom: 24 }} align="flex-start">
                  <img src="https:////notarealhuman.com/face" style={{ width: 40, height: 40, borderRadius: 8 }} />

                  <div>
                    <Label style={{ marginBottom: 4 }}>Someone</Label>
                    <Text>{message.meta}</Text>
                  </div>
                </Flex>
              );
            }
          })}
        </div>

        <Flex gap={12}>
          <Input placeholder="Your message" value={message} onChange={setMessage} />
          <Button onClick={send}>Send</Button>
        </Flex>
      </Card>
    </>
  );
};
