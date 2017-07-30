import React from 'react';
import renderer from 'react-test-renderer';

import StatusBox from '../app/components/chat/StatusBox';

test('Testing StatusBox Component', () => {
  const out = renderer.create(
    <StatusBox status="Test on" count="123" />
  ).toJSON();

  expect(out).toMatchSnapshot();
});