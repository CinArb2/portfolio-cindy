import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { gsap } from "gsap";
import { useContext, useEffect, useRef } from 'react';
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
    
    gsap.to(boxes, { y: 0, opacity: 1, ease: "power3.out",  duration: 1.5, delay: 0.6},);
  });

  const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/" className='boxRef'>
        <a className={styles.linkNavbar}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p ref={box1} className={styles.logo}>Cindy A.</p>
        </a>
      </Link>
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