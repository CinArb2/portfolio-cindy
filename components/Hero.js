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
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const tl = useRef();
  const { handleMouseEnter, handleMouseLeaving} = useContext(CursorContext)

  useEffect(() => {
    
    tl.current = gsap.timeline()
      .to(box1.current, { opacity: 1, y: 0, zIndex: 1, ease: "power3.out", duration: 0.3, delay: 0.5})
      .to(box2.current, {opacity: 1,y: 0, zIndex: 1, ease: "power3.out", duration: 0.3})
      .to(box3.current, { opacity: 1, y: 0, zIndex: 1, ease: "power3.out", duration: 0.3})
    
    gsap.to(box4.current, {
      opacity: 1, y: 0,
      scrollTrigger:
      {
        trigger: box4.current,
        start: 200,
      },
    });
    
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
        >
          <h1 className={styles.titleHero}
            ref={box1}>Creative</h1>
          <h1 className={styles.titleSpan} ref={box2}>front end</h1>
          <h1 className={styles.titleHero} ref={box3}>developer</h1>
        </div>
        <div className={styles.containerImage}>
          <Image
            src={profilePicture}
            alt="picture of author"
            objectFit="cover"
            layout="fill"
            />
        </div>
        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className={styles.subtitleHero} ref={box4}>Based <span className={styles.titleText}>in</span> Medellin</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero