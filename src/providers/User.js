import {h} from 'preact';
import {auth} from '../firebase';
import {createContext} from 'preact';
import { useEffect, useRef, useState, useContext } from 'preact/hooks';
import {AlertContext} from './Alert';
import {ADD_ALERT} from './../reducers/Alerts';
import {firestore} from './../firebase'

export const UserContext = createContext({ 
    user: null
});

function UserProvider({
    children
}) {
    const [user, setUser] = useState(null);
    const isCurrent = useRef(true)
    const [alert, dispatch] = useContext(AlertContext);
    
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (isCurrent.current) {
                setUser(userAuth);
            }
        });

        auth.getRedirectResult().then((resp) => {
            if (resp.credential) {
                const user = resp.user;
                const userID = user.uid;
                const name = user.displayName;
                const store = firestore.collection(process.env.PREACT_APP_FIREBASE_COLLECTIONS);
                const userInStore = store.doc(userID);
        
                userInStore.get().then((user) => {
                    if (!user.exists) {
                        store.doc(userID).set({ 
                            userID,
                            name,
                            washes: 0
                        })
                        .catch((error) => {
                            dispatch({ type: ADD_ALERT, payload: { id: 'signed-in-error', message: 'Issue creating user', type: 'error' } })
                            console.log(error);
                        });
                    }

                    dispatch({ type: ADD_ALERT, payload: { id: 'signed-in-success', message: 'Signed in', type: 'success' } })
                })
                .catch((error) => {
                    dispatch({ type: ADD_ALERT, payload: { id: 'signed-in-error', message: 'Issue signing in', type: 'error' } })
                    console.log(error);
                });

            }
        })

        return () => {
            isCurrent.current = false;
        }
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;