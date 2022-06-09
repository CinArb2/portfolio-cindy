import styles from '../styles/Portfolio.module.css'
import Project from './Project'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useContext, useState } from "react";
import CursorContext from '../context/CursorContext';
import projects from '../helpers/projects'
import { useStore } from '../storeZustand/store';

const Portfolio = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  const [show, setShow] = useState(1)

  const handleClick = (id) => {
    setShow(id)
  }
  
  const handleEnter = () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
  }


  return (
    <section
      id='portfolio'
      className={styles.wrapperPortfolio}>
        <div className={styles.wrapperHeading}>
          <h2 className={styles.heading}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >
            Projects
          </h2>
        </div>
      <div className={styles.containerProjects}>
        {
          projects.map(project => (
            <Project 
              key={project.id}
              data={project}
              handleClick={handleClick}
              show={show}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio