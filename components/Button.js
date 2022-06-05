import React from 'react'
import styles from '../styles/Button.module.css'
import { BsArrowUpRight } from 'react-icons/bs'

const Button = ({children, light}) => {
  return (
    <button className={light ? `${styles.buttonHero} ${styles.light}` : styles.buttonHero}>
      <span className={light ? `${styles.arrowRight} ${styles.light}` : styles.arrowRight}>
        {
          light ?
          <img src="arrowButtonLight.png" alt="" />
          : <img src="arrowButton2.png" alt="" />
        }
      </span>
      <span className={styles.infoButton}>
        {children} <BsArrowUpRight />
      </span>
    </button>
  )
}

export default Button