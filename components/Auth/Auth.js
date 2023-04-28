import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useRouter } from "next/router";

function Auth() {
    const DUMMY_USERS = [
        {
            id: 'p1',
            email: '',
            uname: 'test',
            pass: 'test'
        },
        {
            id: 'p2',
            email: 'test@test.com',
            uname: '',
            pass: 'test'
        },
    ];
    const [UserName, setUserName] = useState([]);
    const [Password, setPassword] = useState([]);
    const [EmailId, setEmailID] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();
    const { username, password, email, isAuthenticated, mode } = useSelector(state => state.auth);

    const handleEmailChange = event => {
        setEmailID(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //Send credentials to backend.
        //If creds are not there in backend, then prompt user to signup.
        //Else toggle authentication mode.
        if (mode === 'login') {
            if ((DUMMY_USERS.find(e => e.uname === username) || DUMMY_USERS.find(e => e.email === username)
                && DUMMY_USERS.find(e => e.pass === password))) {
                var res = DUMMY_USERS.find(obj => { return obj.uname = UserName });
                dispatch(authActions.setPassword(res.pass));
                dispatch(authActions.setUsername(res.uname));
                dispatch(authActions.setEmail(res.email));
                dispatch(authActions.toggleAuthentication('true'));
                dispatch(authActions.toggleMode('login'));
                console.log(DUMMY_USERS);
                router.replace('/');
            }
        }
        else {
            const obj = {
                id: 'p3',
                email: EmailId,
                uname: UserName,
                password: Password
            };
            DUMMY_USERS.push(obj);
            dispatch(authActions.setPassword(Password));
            dispatch(authActions.setUsername(UserName));
            dispatch(authActions.setEmail(EmailId));
            dispatch(authActions.toggleMode('login'));
            dispatch(authActions.toggleAuthentication('true'));
            console.log(DUMMY_USERS);
            router.replace('/');
        }
    }

    const handleToggleMode = (event) => {
        event.preventDefault();
        dispatch(authActions.toggleMode('signup'));
        console.log(mode);
    }

    return (
        <Fragment>
            <h1>
                {mode === 'login' ? 'Login' : 'Signup'}
            </h1>
            <form onSubmit={handleSubmit}>
                {mode === 'signup' ? <label>Email <input type="email" onChange={handleEmailChange}></input> </label> : <div/>}
                <label>
                    Username
                    <input type="text"  onChange={handleUsernameChange} required></input>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password"  onChange={handlePasswordChange} required></input>
                </label>
                <br />
                <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
                {mode === 'login' && <button onClick={handleToggleMode}>Don't have an account yet?</button>}
            </form>
        </Fragment>
    );
}

export default Auth;