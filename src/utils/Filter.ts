import {ITags} from "../types/Tags";
import {IMovieItem} from "../types/Movie";

const getFilteredIds = (movieListTags: ITags, filterValue: string): number[] => {
    const filteredIds = [] as number[];

    Object.getOwnPropertyNames(movieListTags).forEach((id: any) => {
        if(movieListTags[id].includes(filterValue)) {
            filteredIds.push(parseInt(id));
        }
    });

    return filteredIds;
};

const getFilteredData = (data: IMovieItem[], movieListTags: ITags, filterValue: string): IMovieItem[] => {
    let nextMovieListData = [];

    if(!filterValue) {
        nextMovieListData = [...data] || [];
    } else {
        const filteredIds = getFilteredIds(movieListTags, filterValue);
        nextMovieListData = data.filter((movie: IMovieItem) => filteredIds.includes(movie.id));
    }

    return nextMovieListData;
};

export {
    getFilteredIds,
    getFilteredData
}