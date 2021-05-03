import { h } from 'preact';
import classNames from './../../utilities/classNames';
import './Text.scss';

function Text({
    children,
    element: Element = 'p',
    size
}) {
    const componentClassName = 'c-text';

    const className = classNames(
        componentClassName,
        size === 2 && `${componentClassName}--medium`,
        size === 3 && `${componentClassName}--large`,
    );

    return(
        <Element class={className}>
            {children}
        </Element>
    )
}

export {Text};