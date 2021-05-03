import {h} from 'preact';
import {auth} from '../firebase';
import {createContext} from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

export const UserContext = createContext({ 
    user: null
});

function UserProvider({
    children
}) {
    const [user, setUser] = useState(null);
    const isCurrent = useRef(true)
    
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (isCurrent.current) {
                setUser(userAuth);
            }
        });

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