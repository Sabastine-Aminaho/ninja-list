import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return ( 
        <nav className="navbar" id="navbar">
            <div className="logo">
                <Image width={130} height={77} src="/download.png" alt="" />
            </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
        </nav>
     );
}
 
export default Navbar;