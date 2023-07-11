import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';


  export default function NavMenu() {
    return (
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Image
            src="/next.svg" // Route of the image file
            width={216}
            height={30}
            alt="Logo"
          />
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href={'/client-side-rendering'}>
              Server Side Rendering
            </Link>
          </li>
          <li>
            <Link href={'/static-rendering'}>
              Static Rendering
            </Link>
          </li>
          <li>
            <Link href={'/hydration'}>
              Hydration
            </Link>
          </li>
          <li>
            <Link href={'static-site-generation'}>
              Static Site Generation
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
