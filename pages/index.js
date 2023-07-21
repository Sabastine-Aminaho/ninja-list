import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar.'
import Link from 'next/link'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div>
            <div>
                <h1 className={styles.title}>Homepage  </h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sunt doloremque. Aliquid saepe enim dolorum placeat itaque, voluptate accusamus. Facilis minus ab ut tenetur obcaecati blanditiis repellat dolores architecto aut.</p> <br />
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sunt doloremque. Aliquid saepe enim dolorum placeat itaque, voluptate accusamus. Facilis minus ab ut tenetur obcaecati blanditiis repellat dolores architecto aut.</p>
            </div> <br /> <br />
            <Link className={styles.btn} href="/ninjas">
                see ninja listing
            </Link>
        </div>
        <Head>
            <title>Ninja List | Home</title>
            <meta name="keywords" content="ninjas" />
        </Head>
    </>
  )
}
