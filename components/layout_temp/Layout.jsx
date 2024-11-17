// components/Layout.js
import Header from '../header/header';
import Styles from './layout.module.scss';
// import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={Styles.layoutWrapper}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
