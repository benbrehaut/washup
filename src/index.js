import { h, render } from 'preact';
import App from './App';
import AlertProvider from './providers/Alert';
import UserProvider from "./providers/User";
import './style';

function Root() {
    return(
        <UserProvider>
            <AlertProvider>
                <App />
            </AlertProvider>
        </UserProvider>
    )
}

render(<Root />, document.querySelector('#app'));

