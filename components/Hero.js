import React, { useContext } from 'react'
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
  const asteriskRef = useRef(null)
  const asteriskRef2 = useRef(null)
  
  const { handleMouseEnter, handleMouseLeaving} = useContext(CursorContext)

  useEffect(() => {
    let elements = [subHeading.current, title.current, imgRef.current]
    let asterisks = [asteriskRef.current, asteriskRef2.current]
    
    gsap.to(asterisks, {
      ease: "power1.inOut",
      rotate: 1000,
      duration: 0.2,
      scrollTrigger: { scrub: 3 }
    });

    gsap.to(elements, {
      delay: 1.5,
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      // stagger: 0.5,
      y: 0
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
          
          <p className={styles.subtitleHero} ref={subHeading}>Hi, I am Cindy</p>

          <h1
            className={styles.titleHero}
            ref={title}>
            fr
            <span className={styles.asterisk} ref={asteriskRef}>
              <img src="vector2.png" alt="" />
            </span>
            nt-end devel
            <span className={styles.asterisk} ref={asteriskRef2}>
                <img src="starYellow.png" alt="" />
            </span>
            per
          </h1>
        </div>
        <div className={styles.containerImage} ref={imgRef}>
          <img src='profilePicture8.jpg' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero