import { h } from 'preact';
import './Stack.scss';

function Stack({
    children
}) {
    return(
        <div class="c-stack">
            {children}
        </div>
    )
}

function Group({
    children,
    fill
})  {
    return <div class={`c-stack__group ${fill ? 'c-stack__group--fill' : ''}`}>{children}</div>
}

Stack.Group = Group;

export {Stack};