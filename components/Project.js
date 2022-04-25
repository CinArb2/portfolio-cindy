import React from 'react'
import styles from '../styles/Project.module.css'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs';

const Project = ({ picture, tags, title, children }) => {
  
  return (
    <div className={styles.project}>
      <div className={styles.containerImage}>
        <img src={picture} alt="project blog" />
      </div>
      <div className={styles.projectBody}>
        <div>
          <div className={styles.tags}>
            {
              tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))
            }
          </div>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
        <div className={styles.projectButtons}>
          <button className={styles.buttonCode}>View code <BsArrowUpRight/></button>
          <button className={styles.buttonCode}>View  site <BsArrowUpRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Project