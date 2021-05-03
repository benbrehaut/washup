import {h} from 'preact';
import TickIcon from './../../icons/tick.svg';
import AlertIcon from './../../icons/alert.svg';
import CloseIcon from './../../icons/close.svg';
import { useEffect, useState } from 'preact/hooks';
import { VisuallyHidden } from '../VisuallyHidden';
import classNames from './../../utilities/classNames';
import './Alert.scss';

const Alert = ({
    status,
    children,
    onClick,
    id,
    key
}) => {
    const [isActive, setIsActive] = useState(false);
    const ALERT_TIMEOUT_DURATION = 5000;
    const STATUS_ERROR = 'error';
    const defaultClassName = 'c-alert';
    const commonProps = {
        id,
        key
    }

    useEffect(() => {
        setIsActive(true);
        const timer = setTimeout(onClick, ALERT_TIMEOUT_DURATION);

        return() => {
            setIsActive(false);
            clearTimeout(timer);
        }
    }, [onClick])

    /**
     * Set the component className and Icon depending on the status passed in as a prop
     * @param {string} status - the type of status
     */
    function alertStatus(status) {
        switch(status) {
            case STATUS_ERROR:
                return {
                    Icon: AlertIcon,
                    className: `${defaultClassName} c-alert--error`
                };
            default:
                return {
                    Icon: TickIcon,
                    className: defaultClassName
                };
        }
    }
    const {Icon, className} = alertStatus(status);

    const componentClasses = classNames(
        className,
        isActive && 'is-active'
    );


    return (
        <div class={componentClasses} role="alert" {...commonProps}>
            <span class={`${defaultClassName}__icon`}>
                <Icon />
            </span>

            <span class={`${defaultClassName}__text`}>
                {children}
            </span>

            <button class={`${defaultClassName}__close`} type="button" onClick={onClick}>
                <VisuallyHidden>
                    Close alert
                </VisuallyHidden>
                <CloseIcon />
            </button>
        </div>
    )
}

export {Alert}