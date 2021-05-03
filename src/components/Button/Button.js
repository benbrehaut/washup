import { h } from 'preact';
import './Button.scss';
import {VisuallyHidden} from './../VisuallyHidden';

import Spinner from './../../icons/spinner.svg';

function Button({
    children,
    onClick,
    type,
    href,
    icon,
    hiddenLabel,
    loading
}) {
    const className = 'c-btn';

    const commonProps = {
        className,
        onClick,
        type
    };

    const buttonHiddenLabel = hiddenLabel ? (
        <VisuallyHidden>
            {hiddenLabel}
        </VisuallyHidden>
    ) : null;

    const buttonContents = loading ? (
        <span class="c-btn__spinner">
            <Spinner />
        </span>
    ) : (
        <span class="c-btn__content">
            {icon}
            {children}
            {buttonHiddenLabel}
        </span>
    )

    if (href) {
        return(
            <a href={href} {...commonProps}>
                {buttonContents}
            </a>
        )
    }

    return(
        <button {...commonProps} aria-busy={loading ? true : undefined} disabled={loading ? true : undefined}>
            {buttonContents}
	    </button>
    )
}

export {Button};
