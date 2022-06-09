import React from 'react'
import styles from '../styles/Hero.module.css'
import Button from './Button';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import { FaDev } from 'react-icons/fa';
import { useStore } from '../storeZustand/store';

const Hero = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)

  const handleEnter = () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
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
          <a href='/Resume.pdf' download
            target="_blank" rel="noopener noreferrer"
          >
            <Button >Download cv</Button>
          </a>
          <Link href={"#contact"}>
            <a>
              <Button >
                Contact me
              </Button>
            </a>
          </Link>
          <div className={styles.containerSocials}>
            <a href="https://github.com/CinArb2" target="_blank" rel="noopener noreferrer"
              className={styles.socials}
            >
              <AiFillGithub  />
            </a>
            <a href="https://www.linkedin.com/in/cindy-paola-a-b55583224/" target="_blank" rel="noopener noreferrer"
              className={styles.socials}
            >
              <GrLinkedin  />
            </a>
            <a href="https://dev.to/cinarb2" target="_blank" rel="noopener noreferrer" className={styles.socials}>
              <FaDev />
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