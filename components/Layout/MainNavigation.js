import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dynamic from "next/dynamic";
import { authActions } from "../../store/auth-slice";
import { useRouter } from "next/router";



function MainNavigation(){
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated); 
    const dispatch = useDispatch();
    const router = useRouter();
    const [date, setDate] = useState(new Date());
    const handleDateChange = (date) => {
        setDate(date);
    };
    const logoutHandler = (event) => {
        dispatch(authActions.toggleAuthentication('false'));    
        router.replace('/');
    };  
    
    return (
        <header>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div>
                { isAuthenticated === 'true' ? 'user name' : <Link href='/auth'>Login</Link>}
            </div>
            <div>
                {isAuthenticated === 'true' ? <Link href='/updateDiary'></Link>:'Please login to update your diary'}
            </div>
            <div>
                {isAuthenticated === 'true' ? <button onClick={logoutHandler}>Logout</button> : <></>}
            </div>
            <Link href='/myDiary'>My Diary</Link>
        </header>
        
    );
}

export default MainNavigation;