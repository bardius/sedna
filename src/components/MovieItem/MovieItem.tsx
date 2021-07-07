import {useCallback} from "react";
import * as R from 'ramda';
import {IMovieItem} from "../../types/Movie";
import Tag from "../Tag/Tag";
import TagForm from "../TagForm/TagForm";
import {MAX_TAGS_PER_MOVIE} from "../../constants";

export interface IMovieItemProps extends IMovieItem {
    date: string;
    time: string;
    tags: string[];
    updateTags: (id: number, tags: string[]) => void;
}

function MovieItem(
    {
        id,
        name,
        created_at,
        date,
        time,
        tags,
        updateTags
    }: IMovieItemProps
) {
    const onTagDelete = useCallback((event, id: number) => {
        const tagToRemove = event.target.value;
        const nextTags = R.reject((label) => label === tagToRemove, [...tags]);

        updateTags(id, nextTags)
    }, [tags, updateTags]);

    const onTagAdd = useCallback((label: string, id: number) => {
        if(label && !tags.includes(label)) {
            const nextTags = [...tags, label];

            updateTags(id, nextTags)
        }
    }, [tags, updateTags]);

    return (
        <li className={'movie-item'} data-testid={`movie-item movie-item-${id}`}>
            <div className={'movie-item-details'}>
                <h4>{name}</h4>
                <span>
                    Created at: <time dateTime={created_at}>{date} {time}</time>
                </span>
            </div>
            <div className={'movie-item-tags'}>
                {tags.map((tag, index) => {
                    return (
                        <Tag
                            key={`${tag}_${index}`}
                            label={tag}
                            onDelete={(event) => onTagDelete(event, id)} />
                    );
                })}

                <TagForm
                    isDisabled={tags.length >= MAX_TAGS_PER_MOVIE}
                    onTagAdd={(label) => onTagAdd(label, id)}
                    id={id} />
            </div>
        </li>
    )
}

export default MovieItem;