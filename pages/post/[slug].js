import Head from 'next/head'
import React, { useContext, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CursorContext from '../../context/CursorContext'
import styles from '../../styles/PostDetail.module.css'


const PostDetail = ({ post }) => {
  gsap.registerPlugin(ScrollTrigger);
  const cursor = useRef(null)
  const follower = useRef(null)
  const { grow, light } = useContext(CursorContext)
  const { handleLightCoursor, handleDarkCoursor, handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  

  const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }

  const cursorMove = (e) => {
    const { clientX, clientY } = e;

    const mouseX = clientX;
    const mouseY = clientY;
      
      cursor.current.style.transform = `translate3d(${mouseX - cursor.current.clientWidth / 2}px, ${mouseY - cursor.current.clientHeight / 2}px, 0)`

      
        gsap.to(follower.current,
          {
            transform: `translate3d(${mouseX - follower.current.clientWidth / 2}px, ${mouseY - follower.current.clientHeight / 2}px, 0)`,
            ease: "none",
        //     stagger: 0.1,
       })
  }

  useEffect(() => {
    document.addEventListener('mousemove', cursorMove)
    return () => document.removeEventListener('mousemove', cursorMove);
  }, [])

  return (
    <>
      <Head>
          <title>Cindy Arbelaez | {post.title}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <header className={styles.headerPost}
          onMouseEnter={() => handleLightCoursor()}
          onMouseLeave={() => handleDarkCoursor()}
        >
          <h1 className={styles.postTitle}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >{post.title}</h1>
        </header>
        <main className={styles.postBody}>
          <div 
            dangerouslySetInnerHTML={{__html: post.body_html}}
            />
        </main>
      </Layout>
      <div className={`${styles.cursor} ${light ? styles.light : ''}`} ref={cursor}></div>
      <div
        className={`${styles.follower} 
        ${grow ? styles.grow : ''}
        ${light ? styles.light : ''}
        `} ref={follower}>
      </div>
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

