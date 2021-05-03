import {useReducer} from 'preact/hooks';
import {createContext} from 'preact';
import {alertReducer} from '../reducers/Alerts';

export const AlertContext = createContext(null);

function AlertProvider(props) {
    const reducer = useReducer(alertReducer, []);

    return (
        <AlertContext.Provider value={reducer}>
            {props.children}
        </AlertContext.Provider>
  );
};

export default AlertProvider;
