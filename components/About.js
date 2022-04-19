import Heading from "./Heading"
import styles from '../styles/About.module.css'
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiResponsive, DiSass } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiStyledcomponents, SiRedux } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

const About = () => {
  return (
    <section
      className={styles.wrapperAbout}
      id='about'>
      <div className={styles.containerAbout}>
        <Heading number={'01'}>
          About
        </Heading>
        <p className={styles.textAbout}>
          Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
        </p>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.listSkills}>
            <span className={styles.iconsSkills}>
              <AiOutlineHtml5 />
            </span>
            <span className={styles.iconsSkills}>
              <DiCss3/>
            </span>
            <span className={styles.iconsSkills}>
              <IoLogoJavascript/>
            </span>
            <span className={styles.iconsSkills}>
              <GrReactjs/>
            </span>
            <span className={styles.iconsSkills}>
              <FaGitAlt/>
            </span>
            <span className={styles.iconsSkills}>
              <AiFillGithub/>
            </span>
            <span className={styles.iconsSkills}>
              <SiNextdotjs/>
            </span>
            <span className={styles.iconsSkills}>
              <BsBootstrap/>
            </span>
            <span className={styles.iconsSkills}>
              <SiStyledcomponents/>
            </span>
            <span className={styles.iconsSkills}>
              <SiRedux/>
            </span>
            <span className={styles.iconsSkills}>
              <DiResponsive/>
            </span>
            <span className={styles.iconsSkills}>
              <DiSass/>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About