import { h, render } from 'preact';
import App from './App';
import AlertProvider from './providers/Alert';
import UserProvider from "./providers/User";
import './style';

function Root() {
    return(
        <AlertProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </AlertProvider>
    )
}

render(<Root />, document.querySelector('#app'));

