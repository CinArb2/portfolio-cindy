import React from 'react'
import styles from '../styles/IndividualBlog.module.css'
import { BsArrowUpRight } from 'react-icons/bs';
import Button from './Button';

const IndividualBlog = ({ data }) => {
  
  return (
    <div className={styles.individualPost}>
      <h3 className={styles.title}>{data.title}</h3>
      <p>{data.description}</p>
      <Button>Read more</Button>
    </div>
  )
}

export default IndividualBlog