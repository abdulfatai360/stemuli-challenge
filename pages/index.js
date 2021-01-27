import { useRef } from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';

function Home() {
    const pageRef = useRef();
    const sidebarRef = useRef();

    function handleSidebarToggle() {
        pageRef.current.classList.toggle('layout-page--show-sidebar');
        sidebarRef.current.classList.toggle('sidebar--is-visible');
    }

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

            <div ref={pageRef} className="layout-page">
                <div className="layout-sidebar">
                    <Sidebar
                        sidebarRef={sidebarRef}
                        onSidebarToggle={handleSidebarToggle}
                    />
                </div>

                <div className="layout-content">
                    <div className="container-lg">
                        <Header onSidebarToggle={handleSidebarToggle} />

                        <Main />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
