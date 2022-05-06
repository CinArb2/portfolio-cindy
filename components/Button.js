import React from 'react'
import styles from '../styles/Button.module.css'
import { BsArrowUpRight } from 'react-icons/bs'

const Button = ({children}) => {
  return (
   <button className={styles.buttonHero}>
      <span className={styles.arrowRight}>
        <img src="arrowButton2.png" alt="" />
      </span>
      <span className={styles.infoButton}>
        {children} <BsArrowUpRight />
      </span>
    </button>
  )
}

export default Button