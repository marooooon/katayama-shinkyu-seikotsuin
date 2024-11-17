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
              <Link href="" style={{ pointerEvents: 'none' }}>
                <div className={Styles.articlesListHead}>
                  <h3>電気治療</h3>
                </div>
                <div
                  className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
                />
                <div className={Styles.articlesListInner}>
                  <p>心地よい電気で、体のケアをサポートします。</p>
                </div>
              </Link>
            </li>
            <li id="ultrasound-therapy">
              <Link href="" style={{ pointerEvents: 'none' }}>
                <div className={Styles.articlesListHead}>
                  <h3>超音波治療</h3>
                </div>
                <div
                  className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
                />
                <div className={Styles.articlesListInner}>
                  <p>やさしい超音波で、痛みをゆっくり和らげます。</p>
                </div>
              </Link>
            </li>
            <li id="roller-acupuncture">
              <Link href="" style={{ pointerEvents: 'none' }}>
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
              </Link>
            </li>
            <li id="electronic-moxibustion">
              <Link href="" style={{ pointerEvents: 'none' }}>
                <div className={Styles.articlesListHead}>
                  <h3>電子温灸器（保険内）</h3>
                </div>
                <div
                  className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
                />
                <div className={Styles.articlesListInner}>
                  <p>温かなぬくもりで、体をじんわりと癒します。</p>
                </div>
              </Link>
            </li>
            <li id="exercise-therapy">
              <Link href="" style={{ pointerEvents: 'none' }}>
                <div className={Styles.articlesListHead}>
                  <h3>運動療法</h3>
                </div>
                <div
                  className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
                />
                <div className={Styles.articlesListInner}>
                  <p>無理のない運動で、体をゆっくりと元気にします。</p>
                </div>
              </Link>
            </li>
            <li id="massage">
              <Link href="" style={{ pointerEvents: 'none' }}>
                <div className={Styles.articlesListHead}>
                  <h3>マッサージ</h3>
                </div>
                <div
                  className={`${Styles.articlesListThumbnail} ${Styles.articlesListThumbnailElectricalTherapy}`}
                />
                <div className={Styles.articlesListInner}>
                  <p>リラックスしながら、全身を丁寧にほぐしていきます。</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <section id="treatment-scenes">
          <H2 text={'施術の様子'} />
          <div className={Styles.gridTwoColumn}>
            <img
              src="/images/sample.jpg"
              alt="施術の様子"
              style={{ display: 'none' }}
            />
            <div
              className={`${Styles.gridTwoColumnImage} ${Styles.treatment}`}
            />
            <div className={Styles.gridTwoColumnContent}>
              <p className={Styles.gridTwoColumnTitle}>
                心地よいリラックスタイム
              </p>
              <p>
                ゆったりとした空間で、心と体をリフレッシュしていただけます。優しい施術で緊張を解きほぐし、癒しのひとときを提供します。
              </p>
              <p className={Styles.gridTwoColumnTitle}>
                一人ひとりに寄り添う施術
              </p>
              <p>
                お客様それぞれの体に合わせた丁寧なケアを行っています。不安なく安心して施術を受けていただけるよう、細やかな配慮を心がけています。
              </p>
            </div>
          </div>
        </section>
        <section id="usage-flow">
          <H2 text={'ご利用の流れ'} />
          <ul className={Styles.usageStep}>
            <li className={Styles.usageStepList}>
              <span className={Styles.usageStepNumber}>STEP1</span>
              <p className={Styles.usageStepTitle}>無料体験ご予約</p>
              <p className={Styles.usageStepText}>
                訪問鍼灸マッサージに興味を持ち、体験治療を受けてみたいと思っていただけましたら、まずはお電話をいただき、無料体験の日程予約をします。
              </p>
            </li>
            <li className={Styles.usageStepList}>
              <span className={Styles.usageStepNumber}>STEP2</span>
              <p className={Styles.usageStepTitle}>無料体験の実施</p>
              <p className={Styles.usageStepText}>
                ご予約いただいた日時に訪問いたします。無料体験では、現在のお体の調子、過去に患った病気などを問診を行ってから治療内容の説明、ご負担いただく治療費、お支払い方法など当院のシステムについて説明いたします。ここで現在お悩みの症状や治療に関するご希望その他お困りのことを、ご本人様とご家族のお話をお聞かせください。その後、問診をふまえ約20分の無料体験を受けていただきます。
              </p>
            </li>
            <li className={Styles.usageStepList}>
              <span className={Styles.usageStepNumber}>STEP3</span>
              <p className={Styles.usageStepTitle}>
                定期的な訪問治療を開始するために医師へ同意書のご依頼
              </p>
              <p className={Styles.usageStepText}>
                健康保険を使って治療を受けていただくにあたって、医師の同意書が必要になります。基本的には、当院相談員が先生の所に訪問して同意書を書いていただけるかお願いにあがります。もし、ご本人からどうしても依頼したい場合についてはお申し付けください。同意書などの書類は、当院にて用意いたします。
              </p>
            </li>
            <li className={Styles.usageStepList}>
              <span className={Styles.usageStepNumber}>STEP4</span>
              <p className={Styles.usageStepTitle}>定期的な訪問日の調整</p>
              <p className={Styles.usageStepText}>
                健康保険は同意書の日付から有効となります。同意書を提出していただいてから、訪問日の調整を行います。同意書を発行していただくタイミングで治療の開始する日程が決まります。大学病院・総合病院などの場合は少しお時間がかかることが有りますのでご了承ください。
              </p>
            </li>
          </ul>
        </section>
        <section id="greetings">
          <H2 text={'代表挨拶'} />
          <div className={Styles.gridTwoColumn}>
            <img
              src="/images/katayama.jpg"
              alt="施術の様子"
              style={{ display: 'none' }}
            />
            <div className={`${Styles.gridTwoColumnImage} ${Styles.ceo}`} />
            <div className={Styles.gridTwoColumnContent}>
              <p className={Styles.messageCeoText}>
                こんにちは。
                <br />
                当ホームページをご覧いただきありがとうございます。
              </p>
              <p className={Styles.messageCeoText}>
                私は、地域の皆さまの健康と日常の快適さをお支えするため、訪問型の接骨院として活動しております。気軽に通院できない方や、外出が難しい方々にとっても、安心して施術を受けられる環境をお届けしたいという思いで、この形を選びました。
              </p>
              <p className={Styles.messageCeoText}>
                私が一番大切にしているのは、お一人おひとりの体の声に耳を傾け、心地よく施術を受けていただけるよう心がけることです。痛みや不安を抱える皆さまの声に寄り添いながら、専門的な知識と経験を活かして、最適な施術をご提供いたします。
              </p>
              <p className={Styles.messageCeoText}>
                いつでもお気軽にご相談いただければ幸いです。皆さまの日々が少しでも明るく、健やかに過ごせるよう、心を込めてお手伝いいたします。
              </p>
              <p className={Styles.messageCeoText}>
                どうぞよろしくお願いいたします。
              </p>
            </div>
          </div>
        </section>
        <section id="blog">
          <H2 text={'ブログ'} />
          <ul className={Styles.articlesList}>
            {articles.map((article, index) => (
              <li key={index}>
                <Link href={`/articles/${article.slug}`}>
                  <div className={Styles.articlesListHead}>
                    <h3>{article.frontmatter.tags}</h3>
                  </div>
                  <img
                    src={article.frontmatter.image}
                    alt={article.frontmatter.alt}
                    style={{ display: 'none' }}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${
                        article.frontmatter.image || '/images/noimage.png'
                      })`,
                    }}
                    className={Styles.articlesListThumbnail}
                  ></div>
                  <div className={Styles.articlesListInner}>
                    <p>{article.frontmatter.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
      <footer id="footer" className={Styles.footer}>
        <p>&copy; 2024 片山鍼灸接骨院. All rights reserved.</p>
      </footer>
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
