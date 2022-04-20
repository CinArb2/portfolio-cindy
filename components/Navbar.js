import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const box1 = useRef();
  const box2 = useRef();
  

  // wait until DOM has been rendered
  useEffect(() => {
    const boxes = [
      box1.current,
      box2.current,
    ];

    gsap.to(boxes, { y: 0, opacity: 1, ease: "power3.out",  duration: 1.5, delay: 0.6},);
  });

  return (
    <nav className={styles.navbar}>
      <Link href="/" className='boxRef'>
        <a className={styles.linkNavbar} >
          <p ref={box1} className={styles.logo}>Cindy A.</p>
        </a>
      </Link>
      <div className={styles.listLinks} ref={box2} >
        <Link href="#portfolio">
          <a className={styles.linkNavbar}>
            <p>Portfolio</p>
          </a>
        </Link>
        <Link href="#about">
          <a className={styles.linkNavbar}>
            <p>About me</p>
          </a>
        </Link>
        <Link href="#blog">
          <a className={styles.linkNavbar}>
            <p>Blog</p>
          </a>
        </Link>
        <Link href="#contact">
          <a className={styles.linkNavbar}>
            <p>Contact me</p>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar