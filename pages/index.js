import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

function HomePage(props) {
    return <Fragment>
        <Layout>
            <Head>
                <title>Personal Diary</title>
                <meta name="diary" content="Personal Diary using Next JS and Redux frontend"></meta>
            </Head>
        </Layout>

    </Fragment>
}

export default HomePage;