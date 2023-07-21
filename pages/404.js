import Link from "next/link";
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Head from 'next/head';

const NotFound = () => {
    const router = useRouter();
    // const [count, setCountDown] = useState('');

    // const countDownhandler = () => {
    //     setCountDown("prevCount = prevCount - 1")
    // }

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])

    return ( 
        <>
            <div className="not-found">
                <h1>Oops...</h1>
                <h2>that page cannot be found.</h2>
                <p>Redirecting to home in 3 seconds</p>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
            <Head>
                <title>Ninja List | Page not found</title>
                <meta name="keywords" content="ninjas" />
            </Head>
        </>
     );
}
 
export default NotFound;