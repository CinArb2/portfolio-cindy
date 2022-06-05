import React, { useContext } from 'react'
import styles from '../styles/Hero.module.css'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CursorContext from '../context/CursorContext';
import { BsArrowUpRight } from 'react-icons/bs';
import Button from './Button';
import Link from 'next/link';

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

    gsap.to(elements, {
      delay: 1.5,
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      stagger: 0.3,
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
        <div className={styles.containerTitle}>
          <p className={styles.subtitleHero} ref={subHeading}>Hi, I am Cindy</p>
          <h1
            className={styles.titleHero}
            ref={title}
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
        <div className={styles.containerImage} ref={imgRef}>
          <img src='profilePicture9.jpg' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero