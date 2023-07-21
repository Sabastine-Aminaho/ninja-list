import Head from 'next/head'

const About = () => {
    return (
        <>
            <div className="about_us">
                <h1>About </h1> <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quasi ex nobis similique quidem, et itaque deserunt magni, fugit inventore temporibus numquam ab reprehenderit minima debitis, odio hic voluptates dicta?</p> <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quasi ex nobis similique quidem, et itaque deserunt magni, fugit inventore temporibus numquam ab reprehenderit minima debitis, odio hic voluptates dicta?</p>
            </div>
            <Head>
                <title>Ninja List | About Us</title>
                <meta name="keywords" content="ninjas" />
            </Head>
        </> 
     );
}
 
export default About;