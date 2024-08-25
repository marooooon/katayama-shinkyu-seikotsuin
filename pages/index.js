// pages/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import H2 from '../components/heading/h2';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import Styles from './top.module.scss';

const IndexPage = ({ articles }) => {
  return (
    <Layout articles={articles}>
      <section>
        <H2 text={'施術内容'} />
        <ul className={Styles.articlesList}>
          <li>
            <div className={Styles.articlesListHead}>
              <h3>電気治療</h3>
            </div>
            <div
              className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
            />
            <div className={Styles.articlesListInner}>
              <p>心地よい電気で、体のケアをサポートします。</p>
            </div>
          </li>
          <li>
            <div className={Styles.articlesListHead}>
              <h3>超音波治療</h3>
            </div>
            <div
              className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
            />
            <div className={Styles.articlesListInner}>
              <p>やさしい超音波で、痛みをゆっくり和らげます。</p>
            </div>
          </li>
          <li>
            <div className={Styles.articlesListHead}>
              <h3>ローラー鍼（保険内）</h3>
            </div>
            <div
              className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
            />
            <div className={Styles.articlesListInner}>
              <p>やさしく転がすだけで、体のこりをゆるめてリラックスします。</p>
            </div>
          </li>
          <li>
            <div className={Styles.articlesListHead}>
              <h3>電子温灸器（保険内）</h3>
            </div>
            <div
              className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
            />
            <div className={Styles.articlesListInner}>
              <p>温かなぬくもりで、体をじんわりと癒します。</p>
            </div>
          </li>
          <li>
            <div className={Styles.articlesListHead}>
              <h3>運動療法</h3>
            </div>
            <div
              className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
            />
            <div className={Styles.articlesListInner}>
              <p>無理のない運動で、体をゆっくりと元気にします。</p>
            </div>
          </li>
          <li>
            <div className={Styles.articlesListHead}>
              <h3>マッサージ</h3>
            </div>
            <div
              className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
            />
            <div className={Styles.articlesListInner}>
              <p>リラックスしながら、全身を丁寧にほぐしていきます。</p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <H2 text={'施術の様子'} />
      </section>
      <section>
        <H2 text={'ご利用の流れ'} />
        <p>無料体験〜〜</p>
      </section>
      <section>
        <H2 text={'代表挨拶'} />
      </section>
      <section>
        <H2 text={'ブログ'} />
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <Link href={`/articles/${article.slug}`}>
                <p>{article.frontmatter.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content', 'articles'));
  const articles = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('content', 'articles', filename))
      .toString();
    const { data: frontmatter } = matter(markdownWithMetadata);
    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      articles,
    },
  };
}

export default IndexPage;
