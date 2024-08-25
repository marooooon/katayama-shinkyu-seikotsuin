// pages/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import H2 from '../components/heading/h2';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import Styles from './top.module.scss';
import Head from 'next/head';

const IndexPage = ({ articles }) => {
  return (
    <>
      <Head>
        <title>片山鍼灸接骨院</title>
        <meta
          name="description"
          content="片山鍼灸接骨院（訪問鍼灸マッサージ）"
        />
        <meta name="keywords" content="キーワード1, キーワード2, キーワード3" />
        <meta name="author" content="サイトの作成者名" />
        <meta property="og:title" content="OGタイトル" />
        <meta property="og:description" content="OG説明文" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TwitterHandle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout articles={articles}>
        <section id="treatment-contents">
          <H2 text={'施術内容'} />
          <ul className={Styles.articlesList}>
            <li id="electrical-therapy">
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
            <li id="ultrasound-therapy">
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
            <li id="roller-acupuncture">
              <div className={Styles.articlesListHead}>
                <h3>ローラー鍼（保険内）</h3>
              </div>
              <div
                className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
              />
              <div className={Styles.articlesListInner}>
                <p>
                  やさしく転がすだけで、体のこりをゆるめてリラックスします。
                </p>
              </div>
            </li>
            <li id="electronic-moxibustion">
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
            <li id="exercise-therapy">
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
            <li id="massage">
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
        <section id="treatment-scenes">
          <H2 text={'施術の様子'} />
          <div>デザインイメージ：</div>
          <div>左に写真、右にテキスト、みたいなイメージ</div>
        </section>
        <section id="usage-flow">
          <H2 text={'ご利用の流れ'} />
          <div>デザインイメージ：</div>
          <div>STEP1、STEP2、STEP3、、、、と続くイメージ</div>
          <div>※無料体験もここで記述する</div>
        </section>
        <section id="greetings">
          <H2 text={'代表挨拶'} />
          <div>デザインイメージ：</div>
          <div>左に写真、右にテキスト、みたいなイメージ</div>
        </section>
        <section id="blog">
          <div>デザインイメージ：</div>
          <div>できれば施術内容と同じようなイメージ</div>
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
    </>
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
