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
          >
            Portfolio
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