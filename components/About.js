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
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  const [show, setShow] = useState('')
  const [gif, setGif] = useState('')
  
  useEffect(() => {
    
    gsap.to(title.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    });
    gsap.to(text.current, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
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
      ref={section}>
      <div className={styles.containerAbout}>
        <p className={styles.textAbout} ref={text}>
          Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
        </p>
        <h2 className={styles.heading}
          ref={title}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >Ab
          <span className={styles.asterisk}>
            <img src="starYellow.png" alt="" />
          </span>
          ut
        </h2>
      </div>
      <div className={styles.skills}>
        <div className={styles.listSkills}>
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

//slider logic

// const slider = box4.current;
// const totalScroll = slider.scrollWidth - slider.offsetWidth;

// gsap.to(slider, {
    //   x: () => -totalScroll,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: box1.current,
    //     pin: true,
    //     scrub: 1,
    //     start: "center center",
    //     end: () => '+=' + totalScroll,
    //     refreshPriority: 3,
    //   },
    // });