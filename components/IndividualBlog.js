import React from 'react'
import styles from '../styles/IndividualBlog.module.css'
import Button from './Button';
import Link from 'next/link'

const IndividualBlog = ({ data }) => {
  
  return (
    <div className={styles.individualPost}>
      <h3 className={styles.title}>{data.title}</h3>
      <p>{data.description}</p>
      
      
        <Link href={`/post/${data.id}/`}>
          <a>
            <Button >
                    Read More
            </Button>
          </a>
        </Link>
      
    </div>
  )
}

export default IndividualBlog