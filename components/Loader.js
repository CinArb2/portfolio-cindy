import React from 'react'
import styles from '../styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.loader}>
        <span>{"{"}</span><span>{"}"}</span>
      </div>
    </div>
  )
}

export default Loader