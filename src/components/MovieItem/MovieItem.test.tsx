import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieItem from './MovieItem';

test('renders a MovieItem', () => {
  render(
      <MovieItem
          id={1}
          name={'Test Movie'}
          created_at={'2020-06-25 08:50:34'}
          date={'25 Jun 2020'}
          time={'09:50:34'}
          tags={['test tag']}
          updateTags={() => {}}
      />
  );
  const element = screen.getByTestId('movie-item movie-item-1');

  expect(element).toBeInTheDocument();
});
