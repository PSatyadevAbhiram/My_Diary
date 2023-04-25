import { Fragment } from "react";
import Head from "next/head";
import Auth from "../components/Auth/Auth";

function HomePage(){
    return <Fragment>
        <Head>
            <title>Personal Diary</title>
            <meta name="diary" content="Personal Diary using Next JS and Redux frontend"></meta>
        </Head>
        <Auth/>
    </Fragment>
}

export default HomePage;