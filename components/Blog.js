import React from 'react'
import styles from '../styles/Blog.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

import IndividualBlog from './IndividualBlog'

const Blog = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useEffect(() => {
    gsap.to(box2.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box1.current,
        start: "top center",
      },
    });
    gsap.to(box3.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box1.current,
        start: "top center",
      },
    });
  }, [])

  return (
    <section
      id='blog'
      ref={box1}
      className={styles.wrapperBlog}>
      <div className={styles.containerBlog}>
        <h2 className={styles.heading} ref={box2}>03/Blog</h2>
        <p className={styles.textBlog} ref={box3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsa!
        </p>
        <div >
          <h2>Recent posts</h2>
          <div className={styles.containerPosts}>
            {data.map(post => (
              <IndividualBlog key={post.id} data={post}/>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Blog