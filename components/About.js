import styles from '../styles/About.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import CursorContext from '../context/CursorContext';
import Icons from './Icons'
import icons from '../helpers/Icons'

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  const [show, setShow] = useState('')
  
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
          ref={box2}>
          <span
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >
            01/About
          </span>
        </h2>
        <p className={styles.textAbout} ref={box3}>
          Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
        </p>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.listSkills} ref={box4}>
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
      </div>
    </section>
  )
}

export default About