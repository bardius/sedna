import {MouseEventHandler} from "react";
import slugify from "slugify";

export interface IButtonProps {
    color: string;
    text: string;
    isDisabled: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button(
    {
        color,
        text,
        isDisabled,
        onClick
    }: IButtonProps
) {
    return (
        <button
            className={`button button-${color}`}
            data-testid={`button button-${slugify(text)}`}
            disabled={isDisabled}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;