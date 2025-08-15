// import Link from 'next/link';
import Image from "next/image";


const Header = () => {
  return (
    <header className="header-bg text-primary-foreground h-60 mb-10">
        <div className="container header-container">
          
          <Image
              className='header-img'
              src="/G__1_-removebg-preview.png"
              alt=''
              width={180}
              height={180}
          />
          <h1 className="header-text font-bold">ΔΩΡΕΑΝ ΠΡΟΒΛΕΨΕΙΣ</h1>
          {/* <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
  )
}

export default Header