import Head from "next/head";
import Navbar from "./Navbar";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <title>Study NextJS Project</title>
                <meta name="viewport" keywords={keywords} content="initial-scale=1.0, width=device-width"/>
            </Head>
            <main className='main'>
                <Navbar/>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
}

export default MainContainer;
