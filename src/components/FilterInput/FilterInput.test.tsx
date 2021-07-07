import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterInput from './FilterInput';

test('renders a FilterInput', () => {
  render(<FilterInput onChange={() => {}} />);
  const element = screen.getByTestId('filter-input');

  expect(element).toBeInTheDocument();
});
