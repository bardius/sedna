import React from 'react';
import {render, screen} from '@testing-library/react';
import MovieList from './MovieList';

test('renders a MovieList', () => {
    render(
        <MovieList
            movies={[
                {"id": 1, "name": "Jesse Stone: Benefit of the Doubt", "created_at": "2020-10-04 18:11:34"},
                {"id": 2, "name": "Dream Lover", "created_at": "2020-05-08 08:46:38"}
            ]}
            tags={{1: ['test tag']}}
            updateTags={() => {
            }}
        />
    );
    const element = screen.getByTestId('movie-list');

    expect(element).toBeInTheDocument();
});
