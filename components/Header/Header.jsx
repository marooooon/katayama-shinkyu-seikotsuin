// components/Header.js
import { useRouter } from 'next/router';
import Styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className={Styles.header}>
      <div className={Styles.headerInner}>
        <Link href="/" className={Styles.headerLogo}>
          <span>訪問鍼灸マッサージ</span>
          片山鍼灸接骨院
        </Link>
      </div>
      <div className={Styles.headerNav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
