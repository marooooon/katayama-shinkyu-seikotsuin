// pages/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/layout/layout';

const IndexPage = ({ articles }) => {
  return (
    <Layout articles={articles}>
      <div>ここにその他のコンテンツを追加できます。</div>
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
