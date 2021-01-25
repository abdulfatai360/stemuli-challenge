import Head from 'next/head';
import Header from '../components/header/Header';

function Home() {
    return (
        <>
            <Head>
                <title>Stemuli Challenge | Campaigns</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        </>
    );
}

export default Home;
