import {h, Component} from 'preact';
import {auth} from '../firebase';
import {createContext} from 'preact';

export const UserContext = createContext({ 
    user: null
});

class UserProvider extends Component {
    hasMounted = false;

    state = {
        user: null
    };
    
    componentDidMount = () => {
        this.hasMounted = true;

        auth.onAuthStateChanged(userAuth => {
            if (this.hasMounted) {
                this.setState({ 
                    user: userAuth
                });
            }
        });
    };

    componentWillUnmount = () => {
        this.hasMounted = false;
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;