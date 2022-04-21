import styles from '../styles/About.module.css'
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiResponsive, DiSass } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs, GrWifiNone } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiStyledcomponents, SiRedux } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import CursorContext from '../context/CursorContext';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const slider = box4.current;
    const totalScroll = slider.scrollWidth - slider.offsetWidth;
    
    gsap.to(box2.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box1.current,
        start: "top center",
      },
    });
    gsap.to(box3.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: box1.current,
        start: "top center",
      },
    });
    gsap.to(slider, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: box1.current,
        pin: true,
        scrub: 1,
        start: "center center",
        end: () => '+=' + totalScroll,
        refreshPriority: 3,
      },
    });
  }, []);

  const handleEnter = () => {
    handleMouseEnter()
  }

  const handleMouseLeave = () => {
    handleMouseLeaving()
  }


  return (
    <section
      className={styles.wrapperAbout}
      id='about'
      ref={box1}
    >
      <div className={styles.containerAbout}>
        
        <h2 className={styles.heading}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          ref={box2}>01/About</h2>
        <p className={styles.textAbout} ref={box3}>
          Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
        </p>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.listSkills} ref={box4}>
            <div className={styles.iconCard}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={()=>setShow(false)}
            >
              <span className={`${styles.iconsTag} ${show ? styles.show : ''}`}>HTML</span>
              <span className={styles.iconsSkills}>
                <AiOutlineHtml5 />
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <DiCss3/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <IoLogoJavascript/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <GrReactjs/>
              </span>
            </div>
            <div>
                <span className={styles.iconsSkills}>
                <FaGitAlt/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <AiFillGithub/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <SiNextdotjs/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <BsBootstrap/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <SiStyledcomponents/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <SiRedux/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <DiResponsive/>
              </span>
            </div>
            <div>
              <span className={styles.iconsSkills}>
                <DiSass/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About