import {h} from 'preact';
import {useContext} from 'preact/hooks';
import {Router} from 'preact-router';
import AsyncRoute from 'preact-async-route';

import {Header} from './components/Header';

import Home from './routes/Home';

import {UserContext} from "./providers/User";
import {AlertsContainer} from './components/AlertsContainer';

function App() {
    const user = useContext(UserContext);

    return(
        <div class="o-app">
            <div class="o-app__container">
                <Header signedIn={user} />
                
                <Router>
                    <Home path="/" />
                    <AsyncRoute path="/profile" getComponent={ () => import('./routes/Profile').then(module => module.default) } />
                </Router>

                <AlertsContainer />
            </div>
        </div>
    );
}

export default App;
