import React from 'react'
import styles from '../styles/Project.module.css'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs';

const Project = ({picture, tags, title, children}) => {
  return (
    <div className={styles.project}>
      <div className={styles.containerImage}>
        <Image
          src={picture}
          alt="project blog"
          objectFit="cover"
          layout="fill"
          />
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
          <button>View code <BsArrowUpRight/></button>
          <button>View life site <BsArrowUpRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Project