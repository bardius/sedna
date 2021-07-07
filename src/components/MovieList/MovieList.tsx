import {format, parseJSON} from 'date-fns';
import {IMovieItem} from "../../types/Movie";
import MovieItem from "../MovieItem/MovieItem";
import {ITags} from "../../types/Tags";

export interface IMovieListProps {
    movies: IMovieItem[];
    tags: ITags;
    updateTags: (id: number, tags: string[]) => void;
}

function MovieList(
    {
        movies,
        tags,
        updateTags
    }: IMovieListProps
) {
    return (
        <ul className={'movie-list'} data-testid={'movie-list'}>
            {movies.map((movie: IMovieItem, index: number) => {
                return (
                    <MovieItem
                        key={`${movie.id}_${index}`}
                        id={movie.id}
                        name={movie.name}
                        created_at={movie.created_at}
                        date={format(parseJSON(movie.created_at), 'dd MMM yyyy')}
                        time={format(parseJSON(movie.created_at), 'hh:mm:ss')}
                        tags={tags[movie.id] || []}
                        updateTags={updateTags}
                    />
                )
            })}
        </ul>
    )
}

export default MovieList;