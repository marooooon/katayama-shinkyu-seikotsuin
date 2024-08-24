// components/Layout.js
import Header from '../header/header';
import Styles from './layout.module.scss';
import H2 from '../heading/h2';
import Link from 'next/link';

const Layout = ({ children, articles }) => {
  return (
    <div>
      <Header />
      <div className={Styles.layoutWrapper}>
        <section>
          <H2 text={'施術内容'} />
          <div className={Styles}></div>
          <H2 text={'施術内容'} />

          <H2 text={'ブログ'} />
          <ul className="space-y-4">
            {articles.map((article, index) => (
              <li key={index}>
                <Link href={`/articles/${article.slug}`}>
                  <p className="text-blue-500">{article.frontmatter.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
