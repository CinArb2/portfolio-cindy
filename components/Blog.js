import React from 'react'
import styles from '../styles/Blog.module.css'
import { useStore } from '../storeZustand/store';

import IndividualBlog from './IndividualBlog'

const Blog = ({ data }) => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)

   const handleEnter = () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
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
        <div className={styles.textBlog}>
          <p>I like to write in my spare time and give back to the community of what I learn along the way ...  </p>
          <p >Check out some of my latest blog posts</p>
        </div>
      </div>
      
    </section>
  )
}

export default Blog