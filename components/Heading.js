import React from 'react'
import styles from '../styles/Heading.module.css'

const Heading = ({children, number}) => {
  return (
    <div className={styles.heading}>
      <h2>{number}/{children}</h2>
    </div>
  )
}

export default Heading