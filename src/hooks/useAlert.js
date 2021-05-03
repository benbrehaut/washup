import {useContext, useEffect} from 'preact/hooks';
import {AlertContext} from '../providers/Alert';
import {ADD_ALERT, REMOVE_ALERT} from './../reducers/Alerts';

function useAlert(id, type, message) {
    const [alert, dispatch] = useContext(AlertContext);

    const successAlert = (id, type, message) => dispatch({ type: ADD_ALERT, payload: { id: `washed-updated-${Math.random()}`, message: 'Good job!' } })

    const errorAlert = dispatch({ type: ADD_ALERT, payload: { id: `washed-updated-${Math.random()}`, message: 'Good job!' } })

    return {successAlert, errorAlert};
}

export default useAlert;