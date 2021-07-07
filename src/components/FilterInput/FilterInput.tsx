import {ChangeEventHandler} from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface ISearchInputProps {
    onChange: ChangeEventHandler<HTMLInputElement>
}

function FilterInput(
    {
        onChange
    }: ISearchInputProps
) {
    return (
        <div className={'filter-input'} data-testid={'filter-input'}>
            <FontAwesomeIcon icon={faSearch} size="xs" />
            <input
                tabIndex={1}
                name={'filter-input'}
                placeholder={'Search Tags'}
                onChange={onChange} />
        </div>
    );
}

export default FilterInput;