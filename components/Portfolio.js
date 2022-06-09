import styles from '../styles/Portfolio.module.css'
import Project from './Project'
import projects from '../helpers/projects'
import { useStore } from '../storeZustand/store';

const Portfolio = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  
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
            />
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio