import { h } from 'preact';
import {VisuallyHidden} from './../VisuallyHidden';
import './Input.scss';

const Input = ({
    value, labelID
}) => (
    <>
        <VisuallyHidden htmlFor={labelID} element="label">
            Amount
        </VisuallyHidden>
        <input id={labelID} class="input" type="text" value={value} />
    </>
);

export {Input};
