import React from 'react';

import Input from '/components/input';

import Flex from '/components/flex';
import Button from '/components/button';

import { Card } from '/components/card';
import { Heading, Subheading, Label, Text, Sup } from '/components/text';

export default () => {
  const [message, setMessage] = React.useState('');

  return (
    <>
      <Heading style={{ marginBottom: 24 }}>Messenger</Heading>

      <Card style={{ padding: 12, paddingTop: 24 }}>
        <Subheading style={{ marginBottom: 24 }}>Stars 2022 Golden Globe Group</Subheading>

        <div style={{ marginBottom: 24, opacity: .5 }}>
          <Text>You have joined the chat.</Text>
        </div>

        <Flex gap={12} justify="flex-start" style={{ marginBottom: 24 }} align="flex-start">
          <img src="//notarealhuman.com/face" style={{ width: 40, height: 40, borderRadius: 8 }} />

          <div>
            <Label style={{ marginBottom: 4 }}>Mark Ruffalo</Label>
            <Text>Who's going to Golden Globe?</Text>
          </div>
        </Flex>

        <Flex gap={12} justify="flex-start" style={{ marginBottom: 24 }} align="flex-start">
          <img src="//notarealhuman.com/face" style={{ width: 40, height: 40, borderRadius: 8 }} />

          <div>
            <Label style={{ marginBottom: 4 }}>Chris Hemsworth</Label>
            <Text>I will not.</Text>
          </div>
        </Flex>

        <div style={{ marginBottom: 24, opacity: .5 }}>
          <Text>Chris Hemsworth has left the chat.</Text>
        </div>

        <Flex gap={12} justify="flex-start" style={{ marginBottom: 24 }} align="flex-start">
          <img src="//notarealhuman.com/face" style={{ width: 40, height: 40, borderRadius: 8 }} />

          <div>
            <Label style={{ marginBottom: 4 }}>Mark Ruffalo</Label>
            <Text style={{ maxWidth: 600, lineHeight: '120%' }}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</Text>
          </div>
        </Flex>

        <Flex gap={12}>
          <Input placeholder="Your message" value={message} onChange={setMessage} />
          <Button>Send</Button>
        </Flex>
      </Card>
    </>
  );
};
