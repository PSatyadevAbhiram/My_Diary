import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dynamic from "next/dynamic";



function MainNavigation(){
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated); 
    const [date, setDate] = useState(new Date());
    const handleDateChange = (date) => {
        setDate(date);
    };
    return (
        <header>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div>
                { isAuthenticated ? 'user name' : <Link href='/auth'>Login</Link>}
            </div>
            <div>
                {isAuthenticated ? <Link href='/updateDiary'></Link>:'Please login to update your diary'}
            </div>
            <div>
                { isAuthenticated ? <DatePicker selected={date} onChange={handleDateChange}/> : date.toLocaleDateString()}
            </div>
        </header>
        
    );
}

export default dynamic(() => Promise.resolve(MainNavigation), {ssr: false});