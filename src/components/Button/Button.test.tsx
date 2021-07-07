import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders a Button', () => {
  render(<Button isDisabled={false} text={'Test Button'} onClick={() => {} } />);
  const element = screen.getByTestId('button button-Test-Button');

  expect(element).toBeInTheDocument();
});
