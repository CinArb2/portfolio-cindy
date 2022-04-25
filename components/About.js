import styles from '../styles/About.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import CursorContext from '../context/CursorContext';
import Icons from './Icons'
import icons from '../helpers/Icons'

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const section = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const listSkillsRef = useRef(null)
  const asteriskRef = useRef(null)
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  const [show, setShow] = useState('')
  
  
  useEffect(() => {
    let element = [title.current, text.current]
    gsap.to(element, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    })

    gsap.to(asteriskRef.current, {
      ease: "power1.inOut",
      rotate: 1000,
      duration: 0.2,
      scrollTrigger: { scrub: 1 }
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
      ref={section}>
      <div className={styles.containerAbout}>
        <div>
          <div className={styles.decoration}></div>
          <p className={styles.textAbout} ref={text}>
            Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
          </p>
        </div>
        <h2 className={styles.heading}
          ref={title}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >Ab
          <span className={styles.asterisk}
            ref={asteriskRef}
          >
            <img src="greenStar2.png" alt="" />
          </span>
          ut
        </h2>
      </div>
      <div className={styles.skills}>
        <div className={styles.listSkills}
          ref={listSkillsRef}
        >
          {
            icons.map((iconInfo) => (
              <div className={styles.iconCard}
                key={iconInfo.id}
                onMouseEnter={() => setShow(iconInfo.id)}
                onMouseLeave={()=> setShow('')}
              >
                <Icons
                  iconInfo={iconInfo}
                  show={show}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
