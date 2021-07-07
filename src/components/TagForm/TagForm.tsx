import * as React from "react";
import Button from "../Button/Button";
import {useCallback} from "react";

export interface ITagFormProps {
    isDisabled: boolean;
    onTagAdd: (tagLabel: string) => void;
    id: number;
}

function TagForm(
    {
        isDisabled,
        onTagAdd,
        id
    }: ITagFormProps
) {
    const [newTag, setNewTag] = React.useState<string>('');

    const onAddClick = useCallback((e) => {
        onTagAdd(newTag);
        setNewTag('');
    },[onTagAdd, setNewTag, newTag]);

    const onChange = useCallback((e) => {
        setNewTag(e.target.value);
    },[setNewTag]);

    return (
        <div className={'tag-form'} data-testid={`tag-form tag-form-${id}`}>
            <input
                disabled={isDisabled}
                name={`new-tag-label-${id}`}
                value={newTag}
                placeholder={'New tag'}
                onChange={onChange}/>
            <Button
                color={'green'}
                text={'Add tag'}
                isDisabled={isDisabled || !newTag}
                onClick={onAddClick} />
        </div>
    )
}

export default TagForm;