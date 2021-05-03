import { h } from 'preact';
import {VisuallyHidden} from './../VisuallyHidden';
import './Card.scss';

const Card = ({
    title, 
    children
}) => (
	<section class="c-card">
        <VisuallyHidden element="h2">
            {title}
        </VisuallyHidden>

        {children}
	</section>
);

export {Card};
