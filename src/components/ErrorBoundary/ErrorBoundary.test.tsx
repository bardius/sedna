import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

test('renders a ErrorBoundary', () => {
    render(<ErrorBoundary children={<span>test contents</span>}/>);
  const element = screen.getAllByText('test contents');

  expect(element[0]).toBeInTheDocument();
});
