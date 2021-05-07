import {useReducer} from 'preact/hooks';
import {createContext} from 'preact';
import {alertReducer} from '../reducers/Alerts';

export const AlertContext = createContext(null);

function AlertProvider({
    children
}) {
    const reducer = useReducer(alertReducer, []);

    return (
        <AlertContext.Provider value={reducer}>
            {children}
        </AlertContext.Provider>
  );
};

export default AlertProvider;
