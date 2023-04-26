import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

function Auth() {
    console.log('Auth');
    const dispatch = useDispatch();
    const { username, password, isAuthenticated, loginMode } = useSelector(state => state.auth);

    const handleUsernameChange = (event) => {
        dispatch(authActions.setUsername(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(authActions.setPassword(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (loginMode) {
            //Send credentials to backend.
            //If creds are not there in backend, then prompt user to signup.
            //Else toggle authentication mode.
        }
        else{
            //Create an entry in the backend with the given credentials
        }
    }

    const handleToggleMode = (event) => {
        event.preventDefault();
        dispatch(authActions.toggleMode());
    }

    return (
        <Fragment>
            <h1>
                {loginMode ? 'Login' : 'Signup'}
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username/Email:
                    <input type="text" value={username} onChange={handleUsernameChange} required></input>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required></input>
                </label>
                <br />
                <button type="submit">{loginMode ? 'Login' : 'Sign Up'}</button>
                { loginMode && <button onClick={handleToggleMode}>Don't have an account yet?</button>}
            </form>
        </Fragment>
    );
}

export default Auth;