import Head from 'next/head';
import Header from '../components/header/Header';
import Main from '../components/main/Main';

function Home() {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>Stemuli Challenge | Campaigns</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container-lg">
                <Header />

                <Main />
            </div>
        </>
    );
}

export default Home;
