import styles from '../styles/About.module.css'
import Icons from './Icons'
import icons from '../helpers/Icons'
import { useStore } from '../storeZustand/store';

const About = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  const circleLight = useStore((state) => state.circleLight)
const circleDark = useStore((state) => state.circleDark)  

  const handleEnter = () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
  }

  const handleDarkZoneEnter = () => {
    circleLight()
  }

  const handleDarkZoneLeaving = () => {
    circleDark()
  }


  return (
    <section
      className={styles.wrapperAbout}
      id='about'>
      <div className={styles.containerAbout}>
        <div className={styles.wrapperHeadingAbout}>
          <h2 className={styles.heading}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </h2>
        </div>
        <div>
          <div className={styles.decoration}></div>
          <div className={styles.textAbout}>
            <p>Hi Everyone, I am a Front End developer from Colombia, self-motivated learner with strong organization, time management and communication skills.</p>
            <p>Although I graduated as an Industrial Engineer from university, I was always curious about the world of web development, and that is how about 1 year ago I embarked on this path of learning it.</p>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skillsHeading}>
          <h2>Skills</h2>
        </div>
        <div className={styles.listSkills}
          onMouseEnter={handleDarkZoneEnter}
          onMouseLeave={handleDarkZoneLeaving}
        >
          {
            icons.map((iconInfo) => (
              <div
                className={styles.iconCard}
                key={iconInfo.id}
              >
                <Icons
                  iconInfo={iconInfo}
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
