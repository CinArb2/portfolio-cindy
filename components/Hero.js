import React, { useContext } from 'react'
import Image from 'next/image'
import profilePicture from '../public/profilePicture.jpg'
import styles from '../styles/Hero.module.css'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CursorContext from '../context/CursorContext';


const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const title = useRef(null);
  const subHeading = useRef(null);
  const imgRef = useRef(null);
  
  const { handleMouseEnter, handleMouseLeaving} = useContext(CursorContext)

  useEffect(() => {
    let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 1}});
    tl.to(title.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
    })
    .to(subHeading.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
    })
    .to(imgRef.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
    })
    
  }, []);

  const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }

  return (
    <section className={styles.wrapperHero}>
      <div className={styles.containerHero}>
        <div
          className={styles.containerTitle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
          ref={title}>
          <p className={styles.subtitleHero} ref={subHeading}>Hi, I am Cindy</p>
          <h1 className={styles.titleHero}>fr<span className={styles.asterisk}>
            <img src="vector.png" alt="" />
          </span>nt-end devel<span className={styles.asterisk}>
            <img src="greenStar.png" alt="" />
          </span>per
          </h1>
        </div>
        <div className={styles.containerImage} ref={imgRef}>
          <Image
            src={profilePicture}
            alt="picture of author"
            objectFit="cover"
            layout="fill"
            />
        </div>
      </div>
    </section>
  )
}

export default Hero