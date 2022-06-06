import React, { useContext } from 'react'
import styles from '../styles/Hero.module.css'
import CursorContext from '../context/CursorContext';
import Button from './Button';
import Link from 'next/link';

const Hero = () => {
  
  const { handleMouseEnter, handleMouseLeaving} = useContext(CursorContext)

  const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }

  return (
    <section className={styles.wrapperHero}>
      <div className={styles.containerHero}>
        <div className={styles.containerTitle}>
          <p className={styles.subtitleHero}>Hi, I am Cindy</p>
          <h1
            className={styles.titleHero}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >
            Front-end developer
          </h1>
          <Button >Download cv</Button>
          <Link href={"#contact"}>
            <a>
              <Button >
                Contact me
              </Button>
            </a>
          </Link>
        </div>
        <div className={styles.containerImage}>
          <img src='profilePicture9.jpg' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero