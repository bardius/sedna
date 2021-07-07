import React, {useCallback, useEffect} from 'react';
import useSWR from 'swr';
import {useSessionStorage} from "react-use";
import {axios_get_fetcher} from "../../utils/Fetcher";
import {API_HOST, API_KEY, LIST_API_PATH, MOVIE_LIST_TAGS_STORAGE_KEY} from "../../constants";
import {
    MovieList
} from "../../components/index";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {IMovieItem} from "../../types/Movie";
import FilterInput from "../../components/FilterInput/FilterInput";
import {getFilteredData} from "../../utils/Filter";
import {getUpdatedTags} from "../../utils/Tags";

function App() {
    const [movieListData, setMovieListData] = React.useState<IMovieItem[]>([]);
    const {data, error} = useSWR(
        `${API_HOST}${LIST_API_PATH}?key=${API_KEY}`,
        axios_get_fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    const [movieListTags, persistMovieListTags] = useSessionStorage(
        MOVIE_LIST_TAGS_STORAGE_KEY,
        {}
    );

    useEffect(() => {
        setMovieListData(data || []);
    }, [data]);

    const updateTags = useCallback((id: number, newTags: string[]) => {
        const nextTags = getUpdatedTags(movieListTags, id, newTags);
        persistMovieListTags(nextTags);
    }, [movieListTags, persistMovieListTags]);

    const filterMovieList = useCallback((event) => {
        const filterValue = event.target.value;
        const nextMovieListData = getFilteredData(data, movieListTags, filterValue);

        setMovieListData(nextMovieListData);
    }, [data, movieListTags]);

    return (
        <div className="App" data-testid={'app'}>
            <ErrorBoundary>
                <header>
                    <FilterInput
                        onChange={filterMovieList}
                    />
                </header>

                {error ? <div className={'notification notification-warning'} data-testid={'error'}>
                    failed to load
                </div> : null}

                {!data ? <div className={'notification'} data-testid={'loading'}>
                    loading...
                </div> : null}

                <MovieList
                    tags={movieListTags}
                    movies={movieListData}
                    updateTags={updateTags}
                />
            </ErrorBoundary>
        </div>
    );
}

export default App;
