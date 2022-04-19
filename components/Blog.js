import React from 'react'
import styles from '../styles/Blog.module.css'
import Heading from './Heading'
import IndividualBlog from './IndividualBlog'

const Blog = ({data}) => {
  return (
    <section
      id='blog'
      className={styles.wrapperBlog}>
      <div className={styles.containerBlog}>
        <Heading number={'03'}>
          Blog
        </Heading>
        <p className={styles.textBlog}>
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