import {h} from 'preact';
import {useContext} from 'preact/hooks';
import {Alert} from './../Alert';
import {AlertContext} from '../../providers/Alert';
import {REMOVE_ALERT} from './../../reducers/Alerts';
import './AlertsContainer.scss';

const AlertsContainer = () => {
    const [alerts, dispatch] = useContext(AlertContext);

    const handleAlertRemoval = (id) => {
        dispatch({ type: REMOVE_ALERT, payload: { id } })
    }

    return (
        <div class="c-alerts-container" aria-live="assertive">
            {alerts.map((alert) => {
                const alertID = alert.id;
                return (
                    <Alert key={alertID} id={alertID} status={alert.type} onClick={() => handleAlertRemoval(alertID)}>
                        {alert.message}
                    </Alert>
                )
            })}
        </div>
    )
}

export {AlertsContainer}