import {ITags} from "../types/Tags";

const getUpdatedTags = (movieListTags: ITags, id: number, newTags: string[]): ITags => {
    const nextTags = {...movieListTags};
    nextTags[id] = newTags;

    return nextTags;
};

export {
    getUpdatedTags
}