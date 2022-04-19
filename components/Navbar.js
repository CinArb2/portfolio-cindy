import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.linkNavbar}>
          <p>Cindy A.</p>
        </a>
      </Link>
      <div className={styles.listLinks}>
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