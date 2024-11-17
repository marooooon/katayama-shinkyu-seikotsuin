// components/Header.js
import { useRouter } from 'next/router';
import Styles from './Header.module.scss';
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
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="#treatment-contents">施術内容</Link>
          </li>
          <li>
            <Link href="#treatment-scenes">施術の様子</Link>
          </li>
          <li>
            <Link href="#usage-flow">ご利用の流れ</Link>
          </li>
          <li>
            <Link href="#greetings">代表挨拶</Link>
          </li>
          <li>
            <Link href="#blog">ブログ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
