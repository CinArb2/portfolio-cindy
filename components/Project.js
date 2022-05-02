import React from 'react'
import styles from '../styles/Project.module.css'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs';
import Button from './Button';

const Project = ({ data}) => {
  
  return (
    <div className={styles.project}>
      <div className={styles.hoverBg}></div>
      <div className={styles.containerImage}>
        <img src={data.img} alt="project blog" />
      </div>
      <div className={styles.projectBody}>
        <div>
          <div className={styles.tags}>
            {
              data.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))
            }
          </div>
          <h2 className={styles.title}>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={styles.projectButtons}>
          <Button>View code</Button>
          <Button>View site</Button>
        </div>
      </div>
    </div>
  )
}

export default Project