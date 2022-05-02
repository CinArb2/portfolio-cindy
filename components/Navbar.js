import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { gsap } from "gsap";
import {  useContext, useEffect, useRef } from 'react';
import CursorContext from '../context/CursorContext'

const Navbar = () => {
  const box1 = useRef();
  const box2 = useRef();
  const { handleMouseEnter, handleMouseLeaving} = useContext(CursorContext)
  
  // wait until DOM has been rendered
  useEffect(() => {
    const boxes = [
      box1.current,
      box2.current,
    ];

    gsap.to(boxes, {
      delay: 1.5,
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      stagger: 0.3
    });
  });

  const handleEnter =  () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.Link}>
        <Link href="/" >
          <a className={styles.linkNavbar}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p ref={box1} className={styles.logo}>
              CinArb/
            </p>
          </a>
        </Link>
      </div>
      <div className={styles.listLinks} ref={box2} >
        <Link href="#portfolio">
          <a className={styles.linkNavbar}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}>
            <p>Portfolio</p>
          </a>
        </Link>
        <Link href="#about">
          <a className={styles.linkNavbar}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}>
            <p>About me</p>
          </a>
        </Link>
        <Link href="#blog">
          <a className={styles.linkNavbar}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}>
            <p>Blog</p>
          </a>
        </Link>
        <Link href="#contact">
          <a className={styles.linkNavbar}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}>
            <p>Contact me</p>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar