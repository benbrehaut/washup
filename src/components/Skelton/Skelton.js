import { h } from 'preact';
import './Skelton.scss';

function Skelton({
    width
}) {

    /**
     * If no width prop is passed, return 100
     * @param {number} width - the width prop passed to the component
     * @returns either the width prop or 100
     */
    const getWidth = (width) => {
        return width ? width : 100;
    }

    return(
        <div class="c-skelton" style={{width: `${getWidth(width)}%`}}></div>
    )
}

export {Skelton};