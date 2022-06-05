import Head from 'next/head'
import { useContext, useEffect, useRef, useState } from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import styles from '../styles/Home.module.css'
import { gsap } from "gsap";
import CursorContext from '../context/CursorContext'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home({ devDotToPosts }) {
  gsap.registerPlugin(ScrollTrigger);
  const cursor = useRef()
  const follower = useRef()
  const content = useRef(null)
  const { grow, light } = useContext(CursorContext)


  const cursorMove = (e) => {
    const { clientX, clientY } = e;

    const mouseX = clientX;
    const mouseY = clientY;
      
      cursor.current.style.transform = `translate3d(${mouseX - cursor.current.clientWidth / 2}px, ${mouseY - cursor.current.clientHeight / 2}px, 0)`

      
      gsap.to(follower.current,
        {
          transform: `translate3d(${mouseX - follower.current.clientWidth / 2}px, ${mouseY - follower.current.clientHeight / 2}px, 0)`,
          ease: "none"
        })
  }

  useEffect(() => {
    document.addEventListener('mousemove', cursorMove)
    return () => document.removeEventListener('mousemove', cursorMove);
  }, [])


  return (
    <>
    <div className={styles.container} ref={content}>
      <Head>
        <title>Cindy Arbelaez Front End Developer</title>
        <meta name="description" content="Front end Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Blog data={devDotToPosts}/>
        </main>
      </Layout>
    </div>
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

export const getStaticProps = async () => {
  const devDotToPosts = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
  );
  
  const res = await devDotToPosts.json();
  return {
    props: {
      devDotToPosts: res
    },
    revalidate: 10,
  };
};

