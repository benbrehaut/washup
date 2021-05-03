import { h } from 'preact';
import './VisuallyHidden.scss';

const VisuallyHidden = ({
    element: Element = 'span',
    children
}) => (
    <Element class="c-visually-hidden">
        {children}
    </Element>
);

export {VisuallyHidden};
