import React from 'react';

import { Card } from '/components/card';
import Input from '/components/input';
import Button from '/components/button';
import { Subheading, Text } from '/components/text';

import p2pnode from '/libs/p2pnode';
import useName from '/libs/useName';

export default ({ children }: { children: React.ReactElement }) => {
  const [name, setName] = useName();
  const [port, setPort] = React.useState('');
  const [step, setStep] = React.useState('idle' as 'idle' | 'connecting' | 'connected');

  const connect = React.useCallback(() => {
    setStep('connecting');

    p2pnode.listen({ port }).then(() => {
      setStep('connected');
    }).catch((err) => {
      setStep('idle');
      // TODO notification
    });
  }, [port, setStep]);

  if (step === 'connected') {
    return children;
  }

  return (
    <Card style={{ padding: 24, width: 400 }}>
      <Subheading style={{ marginBottom: 36 }}>Network Connection</Subheading>

      <Text style={{ marginBottom: 4 }}>Your name:</Text>
      <Input style={{ marginBottom: 24 }} placeholder="Alex" value={name} onChange={setName} />

      <Text style={{ marginBottom: 4 }}>Port to run local node at:</Text>
      <Input style={{ marginBottom: 24 }} placeholder="8094" value={port} onChange={setPort} />

      <Button disabled={step === 'connecting'} onClick={connect}>Start</Button>
    </Card>
  );
};
