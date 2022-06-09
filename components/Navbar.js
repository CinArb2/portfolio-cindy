import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useState } from 'react';
import { useStore } from '../storeZustand/store';

const Navbar = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    setOpen(false)
  }

  const handleEnter =  () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.Link}
        onMouseEnter={handleEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/" >
          <a className={styles.logo}
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
      <div className={`${styles.listLinks} ${open ? styles.active : ''}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.listNav}>
          <Link href="/">
            <a className={styles.linkNavbar}
              onClick={handleClick}>
              <p>Home</p>
            </a>
          </Link>
          <Link href="/#portfolio">
            <a className={styles.linkNavbar}
              onClick={handleClick}>
              <p>Portfolio</p>
            </a>
          </Link>
          <Link href="/#about">
            <a className={styles.linkNavbar}
              onClick={handleClick}>
              <p>About me</p>
            </a>
          </Link>
          <Link href="/#blog">
            <a className={styles.linkNavbar}
              onClick={handleClick}>
              <p>Blog</p>
            </a>
          </Link>
          <Link href="#contact">
            <a className={styles.linkNavbar}
            onClick={handleClick}>
              <p>Contact me</p>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar