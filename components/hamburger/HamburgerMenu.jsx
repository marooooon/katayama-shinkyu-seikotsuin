import { useState } from 'react';
import styles from './HamburgerMenu.module.scss';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {/* ハンバーガーボタン */}
      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* メニュー */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link href="">Home</Link>
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

      {/* 背景の暗い部分 */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
}
