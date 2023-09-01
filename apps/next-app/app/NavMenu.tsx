import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';


  export default function NavMenu() {
    return (
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <Image src="/om.png" width="200" height="300"  alt=""/>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Meme of the Day (SSR)</a></li>
            <li><a href="/">Meme Gallery (Static Rendering)</a></li>
            <li><a href="/">Meme Creator (Hydration)</a></li>
            <li><a href="/">Vote the Meme (SSG + Revalidation)</a></li>
          </ul>
        </div>
      </div>
    );
  }
