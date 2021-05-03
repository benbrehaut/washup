import { h } from 'preact';
import './Input.scss';

function Input ({
    value, 
    labelID,
    label,
    onChange,
    disabled,
    name,
    readOnly,
    type: type = 'text',
}) {
    const commonProps = {
        disabled,
        onChange,
        value,
        type,
        readOnly,
        name
    }

    return (
        <div class="c-input">
            <input id={labelID} aria-label={label} class="c-input__field" {...commonProps} />
        </div>      
    )
};

export {Input};
