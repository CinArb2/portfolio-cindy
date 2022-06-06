import React from 'react'
import styles from '../styles/Blog.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext } from "react";
import CursorContext from '../context/CursorContext';

import IndividualBlog from './IndividualBlog'

const Blog = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)

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
    >
      <div className={styles.containerBlog}>
        <div className={styles.decoration}></div>
        <div className={styles.containerPosts}>
          {data.map(post => (
            <IndividualBlog key={post.id} data={post}/>
          ))}
        </div>
      </div>
      <div className={styles.containerTitle}>
        <h2
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.heading}>Blog</h2>
      </div>
      
    </section>
  )
}

export default Blog