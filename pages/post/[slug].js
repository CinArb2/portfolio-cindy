import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/PostDetail.module.css'
import Cursor from '../../components/Cursor';
import { useStore } from '../../storeZustand/store';


const PostDetail = ({ post }) => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  
  const handleEnter = () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
  }

  return (
    <>
      <Head>
          <title>Cindy Arbelaez | {post.title}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <header className={styles.headerPost}
          // onMouseEnter={() => handleLightCoursor()}
          // onMouseLeave={() => handleDarkCoursor()}
        >
          <h1 className={styles.postTitle}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >{post.title}</h1>
        </header>
        <section className={styles.postBody}>
          <div 
            dangerouslySetInnerHTML={{__html: post.body_html}}
            />
        </section>
      </Layout>
      <Cursor/>
      <div className={styles.bgColor}></div>
      <div className={styles.bgImage}></div>
    </>
  )
}


export async function getStaticProps(context) {

  const slug = context.params.slug
  const res = await fetch(
    `https://dev.to/api/articles/${slug}`
  );
  const post = await res.json();
  return {
    props: {
      post
    },
    revalidate: 10,
  }

}

export async function getStaticPaths() {

  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  );
  const posts = await devDotToPosts.json();
  const paths = posts.map((el) => ({
    params: { slug: el.id.toString()},
  }))
  
  return {
    paths,
    fallback: 'blocking',
  }
}



export default PostDetail

