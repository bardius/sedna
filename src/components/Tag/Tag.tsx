import slugify from 'slugify';
import {MouseEventHandler, default as React} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export interface ITagProps {
    label: string;
    onDelete: MouseEventHandler<HTMLButtonElement>;
}

function Tag(
    {
        label,
        onDelete
    }: ITagProps
) {
    return (
        <span className={'tag'} data-testid={`tag tag-${slugify(label)}`}>
            {label}
            <button onClick={onDelete} value={label}>
                <FontAwesomeIcon icon={faTimes} size="xs" />
            </button>
        </span>
    )
}

export default Tag;