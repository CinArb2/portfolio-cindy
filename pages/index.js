import Head from 'next/head'
import { useContext, useEffect, useRef } from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import styles from '../styles/Home.module.css'
import Cursor from '../components/Cursor'

export default function Home({ devDotToPosts }) {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Cindy Arbelaez Front End Developer</title>
          <meta name="description" content="Portfolio Front end Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Hero />
          <About />
          <Portfolio />
          <Blog data={devDotToPosts}/>
        </Layout>
      </div>
      <Cursor/>
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

