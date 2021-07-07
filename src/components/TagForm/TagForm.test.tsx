import React from 'react';
import { render, screen } from '@testing-library/react';
import TagForm from './TagForm';

test('renders a TagForm', () => {
  render(<TagForm isDisabled={false} id={1} onTagAdd={() => {}} />);
  const element = screen.getByTestId('tag-form tag-form-1');

  expect(element).toBeInTheDocument();
});
