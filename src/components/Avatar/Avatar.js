import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import './Avatar.scss';

import AvaterIcon from './../../icons/avatar.svg';

const Avatar = ({
    imageURL,
    label
}) => {
    const [userImage, hasUserImage] = useState(imageURL);

    /**
     * Show SVG avatar if image fails to load
     */
    const handleError = () => {
        // set userImage to null
        hasUserImage(false);
    }

    return(
        <span class="c-avatar" role="img" aria-label={label}>
            {userImage ? 
                <>
                    <img src={userImage} alt="" role="presentation" class="c-avatar__picture" onError={handleError} />
                </>
                :
                <>
                    <AvaterIcon data-testid="avatar-fallback-img" />
                </>
            }
        </span>
    )
}

export {Avatar}