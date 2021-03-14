import { h } from 'preact';
import {VisuallyHidden} from './../VisuallyHidden';
import './Card.scss';

const Card = ({title, children}) => (
	<article class="card">
        <VisuallyHidden element="h2">
            {title}
        </VisuallyHidden>

        {children}
	</article>
);

export {Card};
