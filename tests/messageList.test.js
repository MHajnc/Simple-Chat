import React from 'react';
import renderer from 'react-test-renderer';

import MessageList from '../app/components/chat/MessageList';

test('Testing MessageList Component', () => {
  const messages = [
    {currentuser: true, text: "Hello!", type: "message"},
    {currentuser: false, text: "Hi there...", type: "message"},
    {currentuser: true, text: "Do you want to talk?", type: "message"},
    {currentuser: false, text: "NO!!!", type: "message"},
    {status: 'someone left', count: 1, type: 'status'}
  ];

  const out = renderer.create(
    <MessageList messagelist={messages} />
  ).toJSON();

  expect(out).toMatchSnapshot();
});
