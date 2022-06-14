import styles from '../styles/About.module.css'
import Icons from './Icons'
import icons from '../helpers/Icons'
import { useStore } from '../storeZustand/store';
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  const circleLight = useStore((state) => state.circleLight)
  const circleDark = useStore((state) => state.circleDark)
  const isMobil = useMediaQuery({
    query: '(max-width: 750px)'
  })

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
        <div className={styles.decoration}>
        </div>
        <div>
          <div className={styles.wrapperHeadingAbout}
            onMouseEnter={handleEnter}
            onMouseLeave={handleMouseLeave}
          >  
            <h2 className={styles.heading}>About</h2>
          </div>
          <div className={styles.textAbout}>
            <p>Hi everyone, I am a Full-stack developer, who is always excited to build and learn. I consider myself a proactive person, with great attention to small details and the big picture too, a taste for good design and definitely a team player.  </p>
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
          <div className={styles.slideTrack}>
          {
              
            (isMobil ? icons: [...icons, ...icons, ...icons]).map((iconInfo) => (
              <div
                className={styles.iconCard}
                key={Math.random()*1000}
              >
                <Icons
                  iconInfo={iconInfo}
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
