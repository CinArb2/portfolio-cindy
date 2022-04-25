import React from 'react'
import styles from '../styles/Blog.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useContext } from "react";
import CursorContext from '../context/CursorContext';

import IndividualBlog from './IndividualBlog'

const Blog = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const containerPost = useRef(null);
  const asteriskRef = useRef(null)

  useEffect(() => {
    const elements = gsap.utils.toArray(containerPost.current.children)
    
    gsap.to(asteriskRef.current, {
      ease: "power1.inOut",
      rotate: 1000,
      duration: 0.1,
      scrollTrigger: { scrub: 1 }
    });

    gsap.to(headingRef.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      }
    })
    gsap.to(elements, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      }
    })
  }, [])

   const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }


  return (
    <section
      id='blog'
      className={styles.wrapperBlog}
      ref={sectionRef}
    >
      <div className={styles.containerBlog}>
        <div className={styles.decoration}></div>
        <div className={styles.containerPosts} ref={containerPost}>
          {data.map(post => (
            <IndividualBlog key={post.id} data={post}/>
          ))}
        </div>
      </div>
      <div className={styles.containerTitle}>
        <h2
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
          ref={headingRef}
          className={styles.heading}>Bl<span className={styles.asterisk} ref={asteriskRef}>
        <img src="vector2.png" alt="" />
        </span>g</h2>
      </div>
      
    </section>
  )
}

export default Blog