import React from 'react'
import styles from '../styles/Message.module.css'

const Message = ({message}) => {
  return (
    <div className={styles.containerMessage}>
      <h2>{message}</h2>
      <div className={styles.successCheckmark}>
        <div className={styles.checkIcon}>
          <span className={`${styles.iconLine} ${styles.lineTip}`}></span>
          <span className={`${styles.iconLine} ${styles.lineLong}`}></span>
          <div className={styles.iconCircle}></div>
          <div className={styles.iconFix}></div>
        </div>
      </div>
    </div>
  )
}

export default Message