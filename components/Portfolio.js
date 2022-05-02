import styles from '../styles/Portfolio.module.css'
import Project from './Project'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useContext } from "react";
import CursorContext from '../context/CursorContext';
import projects from '../helpers/projects'

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionPortf = useRef(null);
  const headingRef = useRef(null);
  const { handleMouseEnter, handleMouseLeaving } = useContext(CursorContext)
  const asteriskRef = useRef(null)
  const asteriskRef2 = useRef(null)
  const asteriskRef3 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 1}})
    let asterisks = [asteriskRef.current, asteriskRef2.current, asteriskRef3.current]

    gsap.to(asterisks, {
      ease: "power1.inOut",
      rotate: 1000,
      duration: 0.2,
      scrollTrigger: { scrub: 3 }
    });

    gsap.to(headingRef.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      scrollTrigger: {
        trigger: sectionPortf.current,
        start: "top center",
      }
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
      id='portfolio'
      ref={sectionPortf}
      className={styles.wrapperPortfolio}>
        <div className={styles.wrapperHeading}>
          <h2 className={styles.heading}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
            ref={headingRef}
          >P
            <span className={styles.asterisk} ref={asteriskRef}>
              <img src="vector4.png" alt="" />
            </span>
            rft
            <span className={styles.asterisk} ref={asteriskRef2}>
              <img src="greenStar3.png" alt="" />
            </span>
            li
            <span className={styles.asterisk} ref={asteriskRef3}>
              <img src="starYellow1.png" alt="" />
            </span>
          </h2>
        </div>
      <div className={styles.containerProjects}>
        {
          projects.map(project => (
            <Project key={project.id} data={project}/>
          ))
        }
        </div>
    </section>
  )
}

export default Portfolio