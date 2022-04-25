import React from 'react'
import styles from '../styles/IndividualBlog.module.css'
import { BsArrowUpRight } from 'react-icons/bs';

const IndividualBlog = ({ data }) => {
  
  return (
    <div className={styles.individualPost}>
      <h3 className={styles.title}>{data.title}</h3>
      <p>{data.description}</p>
      <button className={styles.buttonCode}>Read more <BsArrowUpRight/></button>
    </div>
  )
}

export default IndividualBlog