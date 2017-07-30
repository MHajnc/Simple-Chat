import React from 'react';
import renderer from 'react-test-renderer';

import MessageBox from '../app/components/chat/MessageBox';

test('Testing MessageBox Component -> currentuser="true"', () => {
  const out = renderer.create(
    <MessageBox currentuser={true} text="Hello!" />
  ).toJSON();

  expect(out).toMatchSnapshot();
});

test('Testing MessageBox Component -> currentuser="false"', () => {
  const out = renderer.create(
    <MessageBox currentuser={false} text="Hi man!" />
  ).toJSON();

  expect(out).toMatchSnapshot();
});