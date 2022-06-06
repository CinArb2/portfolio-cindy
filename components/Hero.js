import React, { useContext } from 'react'
import styles from '../styles/Hero.module.css'
import CursorContext from '../context/CursorContext';
import Button from './Button';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import { FaDev } from 'react-icons/fa';

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
          <div className={styles.containerSocials}>
            <a href="https://github.com/CinArb2" target="_blank" rel="noopener noreferrer" >
              <AiFillGithub className={`${styles.socials} ${styles.git}`} />
            </a>
            <a href="https://www.linkedin.com/in/cindy-paola-a-b55583224/" target="_blank" rel="noopener noreferrer" >
              <GrLinkedin className={`${styles.socials} ${styles.linkedin}`} />
            </a>
            <a href="https://dev.to/cinarb2" target="_blank" rel="noopener noreferrer" >
              <FaDev className={`${styles.socials} ${styles.dev}`}/>
            </a>
          </div>
        </div>
        <div className={styles.containerImage}>
          <img src='profile.jpg' alt="" />
          
        </div>
      </div>
    </section>
  )
}

export default Hero