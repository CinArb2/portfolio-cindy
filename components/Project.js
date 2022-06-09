import React from 'react'
import styles from '../styles/Project.module.css'
import Button from './Button';


const Project = ({ data, handleClick, show}) => {

  return (
    <div className={show === data.id ? `${styles.projectWrapper} ${styles.active}` : styles.projectWrapper}
      onClick={() => handleClick(data.id)}
    >
      <div className={styles.folderForm}>
        <span>
         {data.folderInfo}
        </span>
      </div>
      <div className={styles.project}>
        <div className={styles.containerImage}>
          <img src={data.img} alt="project blog" />
        </div>
        <div className={styles.projectBody}>
          <div>
            <h2 className={styles.title}>{data.title}</h2>
            <div className={styles.tags}>
              {
                data.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))
              }
            </div>
            <p>{data.description}</p>
          </div>
          <div className={styles.projectButtons}>
            <div className={styles.projectOverlay}></div>
            <a href={data.gitUrl} target="_blank" rel="noopener noreferrer">
              <Button >
                View code
              </Button>
            </a>
            <a href={data.urlLive} target="_blank" rel="noopener noreferrer">
              <Button >
                  View site
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project