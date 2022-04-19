import React from 'react'
import Image from 'next/image'
import profilePicture from '../public/profile2.jpg'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.wrapperHero}>
      <div className={styles.containerHero}>
        <h1 className={styles.titleHero}>Creative <span className={styles.titleText}>front end</span>  developer</h1>
        <div className={styles.containerImage}>
          <Image
            src={profilePicture}
            alt="picture of author"
            objectFit="cover"
            layout="fill"
            />
        </div>
        <h2 className={styles.subtitleHero}>Based <span className={styles.titleText}>in</span> Medellin</h2>
      </div>
    </section>
  )
}

export default Hero