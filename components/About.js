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
  const { handleMouseEnter,
    handleMouseLeaving,
    handleLightCoursor,
    handleDarkCoursor
  } = useContext(CursorContext)
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
            Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW.
            <br/>
            I'm a self-motivated learner with strong organisation, time management and communication skills.
            I love exploring, creating and I consider myself a lifelong learner.
            <br/>
            Although I graduated as an industrial engineer from university, I was always curious about the world of web development, and that is how about 1 year ago I have embarked on this path of learning it.
            <br />
            Below you will find a list of technologies I have worked with.
          </p>
        </div>
        <h2 className={styles.heading}
          ref={title}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >
          About
        </h2>
      </div>
      <div className={styles.skills}>
        <div className={styles.skillsHeading}>
          <h2>Skills</h2>
        </div>
        <div className={styles.listSkills}
          ref={listSkillsRef}
          onMouseEnter={() => handleLightCoursor()}
          onMouseLeave={() => handleDarkCoursor()}
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
