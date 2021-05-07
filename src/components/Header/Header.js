import {h} from 'preact';
import {useContext} from 'preact/hooks';
import {Link} from 'preact-router/match';
import {SignIn} from './../../firebase';
import {VisuallyHidden} from './../VisuallyHidden';
import {Button} from './../Button';
import {Avatar} from './../Avatar';
import {Text} from './../Text';
import {Stack} from './../Stack';
import {AlertContext} from '../../providers/Alert';
import './Header.scss';

const Header = ({
    signedIn
}) => {
    const [alert, dispatch] = useContext(AlertContext);

    return (
        <header class="c-app-header" role="banner">
            <Stack>
                <Stack.Group fill>
                    <Text element="h1" size={3}>
                        <Link href="/" rel="home" class="c-app-header__link">
                            WashUp
                        </Link>
                    </Text>
                </Stack.Group>

                <Stack.Group>                
                    {signedIn ?
                        <>
                            <Link href="/profile" class="c-app-header__link">
                                <Avatar label={signedIn.name} imageURL={signedIn.photoURL} />
                                
                                <VisuallyHidden>
                                    Profile
                                </VisuallyHidden>
                            </Link>
                        </>
                        : 
                        <>
                            <Button type="button" onClick={() => SignIn()}>
                                Sign in
                            </Button>
                        </>
                    }
                </Stack.Group>
            </Stack>
        </header>
    )
};

export {Header};
