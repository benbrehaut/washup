import { h } from 'preact';
import './Emoji.scss';

const Emoji = ({
    name, children
}) => (
    <span class="c-emoji" role="img" aria-label={name} title={name}>
        {children}
    </span>
);

export {Emoji};
