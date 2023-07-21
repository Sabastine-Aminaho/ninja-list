import Link from "next/link";
import Head from 'next/head'

const Contact = () => {
    return ( 
        <>
            <div className="contact_us">
                <h1>Contact</h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quasi ex nobis similique quidem, et itaque deserunt magni, fugit inventore temporibus numquam ab reprehenderit minima debitis, odio hic voluptates dicta?</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quasi ex nobis similique quidem, et itaque deserunt magni, fugit inventore temporibus numquam ab reprehenderit minima debitis, odio hic voluptates dicta?</p>
                <Link href="/ninjas">See ninja listing</Link>
            </div>
            <Head>
            <title>Ninja List | Contact Us</title>
            <meta name="keywords" content="ninjas" />
            </Head>
        </>
     );
}
 
export default Contact;