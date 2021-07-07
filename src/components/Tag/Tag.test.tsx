import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

test('renders a Tag', () => {
  render(<Tag label={'test tag'} onDelete={() => {}} />);
  const element = screen.getByTestId('tag tag-test-tag');

  expect(element).toBeInTheDocument();
});
