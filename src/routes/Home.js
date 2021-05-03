import {h} from 'preact';
import {useContext, useEffect, useRef, useState} from 'preact/hooks';
import {Card} from './../components/Card';
import {Emoji} from './../components/Emoji';
import {Input} from './../components/Input';
import {Button} from './../components/Button';
import {Skelton} from './../components/Skelton';
import {Text} from './../components/Text';
import {Stack} from './../components/Stack';
import PlusIcon from './../icons/plus.svg';
import {firestore} from './../firebase';
import {getFirstName} from './../utilities/getFirstName';
import classNames from '../utilities/classNames';
import {AlertContext} from '../providers/Alert';
import {ADD_ALERT} from './../reducers/Alerts';

function Home() {
    const isCurrent = useRef(true)
    const [users, setUsers] = useState({
        data: [],
        loading: true
    });
    const [inProgress, setInProgress] = useState(false);
    const getCollection = firestore.collection(process.env.PREACT_APP_FIREBASE_COLLECTIONS).get();
    const [alert, dispatch] = useContext(AlertContext);

    /**
     * Get the users from firebase
     */
    const getWashes = async () => {
        getCollection.then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());

            if (isCurrent.current) {
                setUsers({
                    data: data,
                    loading: false
                });
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ADD_ALERT, payload: { id: 'get-washes-fail', message: 'Could not get washes!', type: 'error' } })
        });
    }

    useEffect(() => {
        getWashes();

        return () => {
            isCurrent.current = false;
        }
    }, []);

    /**
     * Handle the form submission to update the amount of washes
     * @param {event} event - form event
     * @param {string} ID  - the user ID
     * @param {number} washes - the amount of washes the user has
     */
    const handleSubmit = async (event, ID, washes) => {
        event.preventDefault();
        const getUser = firestore.collection(process.env.PREACT_APP_FIREBASE_COLLECTIONS).doc(ID);
        
        setInProgress(true);

        await getUser.update({
            washes: washes + 1
        })
        .then(() => {
            // Done
            setInProgress(false);

            // Update the state now that we have updated firebase
            const currentUsers = [...users.data];
            const updateUserState = currentUsers.map((item) => {
                if (item.userID === ID) {
                    return {
                        ...item,
                        washes: washes + 1
                    }
                }
    
                return item
            });
    
            setUsers({ data: updateUserState, loading: false });

            dispatch({ type: ADD_ALERT, payload: { id: 'washes-count-updated-success', message: 'Good job!', type: 'success' } })
        })
        .catch((error) => {
            setInProgress(false);
            console.error(error);
            dispatch({ type: ADD_ALERT, payload: { id: 'washes-count-updated-error', message: 'Could not update count! Have you signed in?', type: 'error' } })
        });
    }

    return(
        <Card title="Members">
            {users.loading ?
                <div role="status" aria-label="Loading">
                    <Stack>
                        <Stack.Group>
                            <Skelton width={5} />
                        </Stack.Group>

                        <Stack.Group fill>
                            <Skelton width={20} />
                        </Stack.Group>

                        <Stack.Group>
                            <Skelton width={20} />
                        </Stack.Group>

                        <Stack.Group>
                            <Skelton width={20} />
                        </Stack.Group>
                    </Stack>

                    <Stack>
                        <Stack.Group>
                            <Skelton width={5} />
                        </Stack.Group>

                        <Stack.Group fill>
                            <Skelton width={20} />
                        </Stack.Group>

                        <Stack.Group>
                            <Skelton width={20} />
                        </Stack.Group>

                        <Stack.Group>
                            <Skelton width={20} />
                        </Stack.Group>
                    </Stack>
                </div>
                :
                <>
                    {users.data.map((item, index) => {
                        const className = classNames(
                            index === 0 && 'u-margin-bottom-2'
                        );

                        return(
                            <form class={className} onSubmit={(e) => handleSubmit(e, item.userID, item.washes)}>
                                <Stack>
                                    <Stack.Group>
                                        <Emoji name="Cat">
                                            🐈
                                        </Emoji>
                                    </Stack.Group>
                                    
                                    <Stack.Group fill>
                                        <Text size={2} element="span">
                                            {getFirstName(item.name)}
                                        </Text>
                                    </Stack.Group>

                                    <Stack.Group>
                                        <Input name="washes" label={getFirstName(item.name)} value={item.washes} labelID={`washes-${index}`} readOnly />
                                    </Stack.Group>

                                    <Stack.Group>
                                        <Button type="submit" icon={<PlusIcon />} hiddenLabel="Add washup" loading={inProgress}></Button>
                                    </Stack.Group>
                                </Stack>
                            </form>
                        )
                    })}
                </>
            }
        </Card>
    )
}

export default Home;