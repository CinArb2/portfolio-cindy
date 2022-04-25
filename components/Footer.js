import styles from '../styles/Footer.module.css'
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import { FaDev } from 'react-icons/fa';
import { BsHeartHalf } from 'react-icons/bs';
import React, { useContext } from 'react'
import CursorContext from '../context/CursorContext';

const Footer = () => {
  const { handleLightCoursor, handleDarkCoursor, handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  

  const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }

  return (
    <footer
      id='contact'
      className={styles.footer}
      onMouseEnter={() => handleLightCoursor()}
      onMouseLeave={() => handleDarkCoursor()}
    >
      <div className={styles.contacMe}>
        <p className={styles.textContactme}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >
          If you want to talk about any project or just get in touch</p>
      </div>
      <div className={styles.listSocial}>
        <div>
          <p>© 2022</p>
        </div>
        <div>
          <AiFillGithub className={styles.socials} />
          <GrLinkedin className={styles.socials} />
          <FaDev className={styles.socials}/>
        </div>
        <div>
          <p>Made with <BsHeartHalf/></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer