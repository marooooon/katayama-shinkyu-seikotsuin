// components/Header.js
import { useRouter } from 'next/router';
import Styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className={Styles.header}>
      <div className="hoge">
        <Link href="/">
          <p>片山鍼灸院</p>
        </Link>
        <p className={Styles.hoge}>HOGEHOGE</p>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <p className={router.pathname === '/' ? 'font-bold' : ''}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className={router.pathname === '/about' ? 'font-bold' : ''}>
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <div
                  className={
                    router.pathname.startsWith('/articles') ? 'font-bold' : ''
                  }
                >
                  Articles
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
