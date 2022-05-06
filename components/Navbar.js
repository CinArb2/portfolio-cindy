import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { gsap } from "gsap";
import {  useContext, useEffect, useRef, useState } from 'react';
import CursorContext from '../context/CursorContext'

const Navbar = () => {
  const { handleMouseEnter, handleMouseLeaving} = useContext(CursorContext)
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    setOpen(false)
  }

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
          <a className={styles.logo}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >CinArb/
          </a>
        </Link>
      </div>
      <div className={styles.decoration}></div>
      <div className={`${styles.menuHamb} ${open ? styles.active : ''}`} onClick={()=>setOpen(prev=> !prev)}>
        <span className={open ? styles.active : ''}></span>
        <span className={open ? styles.active : ''}></span>
        <span className={open ? styles.active : ''}></span>
      </div>
      <div  className={`${styles.listLinks} ${open ? styles.active : ''}`}>
        <div className={styles.listNav}>
          <Link href="#portfolio">
            <a className={styles.linkNavbar}
              onMouseEnter={handleEnter}
              onClick={handleClick}
            onMouseLeave={handleMouseLeave}>
              <p>Portfolio</p>
            </a>
          </Link>
          <Link href="#about">
            <a className={styles.linkNavbar}
              onMouseEnter={handleEnter}
              onClick={handleClick}
            onMouseLeave={handleMouseLeave}>
              <p>About me</p>
            </a>
          </Link>
          <Link href="#blog">
            <a className={styles.linkNavbar}
              onMouseEnter={handleEnter}
              onClick={handleClick}
            onMouseLeave={handleMouseLeave}>
              <p>Blog</p>
            </a>
          </Link>
          <Link href="#contact">
            <a className={styles.linkNavbar}
            onMouseEnter={handleEnter}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}>
              <p>Contact me</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar