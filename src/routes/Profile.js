import {h} from 'preact';
import {route} from 'preact-router';
import {useContext, useState, useEffect} from 'preact/hooks';
import {Card} from '../components/Card';
import {Button} from '../components/Button';
import {Skelton} from './../components/Skelton';
import {Text} from './../components/Text';
import {Stack} from './../components/Stack';
import {auth} from './../firebase';
import {getFirstName} from './../utilities/getFirstName';
import {UserContext} from '../providers/User';
import {AlertContext} from '../providers/Alert';
import {ADD_ALERT} from './../reducers/Alerts';

function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const user = useContext(UserContext);
    const [alert, dispatch] = useContext(AlertContext);

    const signOut = () => {
        auth.signOut().then(() => {
            route('/', true);
            dispatch({ type: ADD_ALERT, payload: { id: 'sign-out-success', message: 'Signed out', type: 'success' } })
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ADD_ALERT, payload: { id: 'sign-out-error', message: 'Sorry, something went wrong! Please try again in a bit.', type: 'error' } })
        });
    }

    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    });

    return(
        <Card title="Profile">
            {isLoading ?
                <div role="status" aria-label="Loading">
                    <Stack>
                        <Stack.Group fill>
                            <Skelton width={40} />
                        </Stack.Group>

                        <Skelton width={15} />
                    </Stack>
                </div>
            :
            <>
                <Stack>
                    <Stack.Group fill>
                        <Text element="h3" size={3}>
                            {getFirstName(user.displayName)}
                        </Text>
                    </Stack.Group>

                    <Button type="button" onClick={() => signOut()}>
                        Sign out
                    </Button>
                </Stack>
            </>
            }
        </Card>
    )
}

export default Profile;