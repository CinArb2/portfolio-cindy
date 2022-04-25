import styles from '../styles/Portfolio.module.css'
import Project from './Project'
import blogPicture from '../public/blog.png'
import ecommerce from '../public/ecommerce.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useContext } from "react";
import CursorContext from '../context/CursorContext';

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionPortf = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);
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
    tl.to(project1.current, {
      scrollTrigger: {
        trigger: sectionPortf.current,
        start: "top center", 
        end: "+=200",
        scrub: 5,
      },
      x: 0,
      scale: 1,
      opacity: 1,
    })
    .to(project2.current, {
      scrollTrigger: {
        trigger: project1.current,
        start: "top center", 
        end: "+=200", 
        scrub: 5,
      },
      x: 0,
      scale: 1,
      opacity: 1,
    })
    .to(project3.current, {
      scrollTrigger: {
        trigger: project2.current,
        start: "top center", 
        end: "+=200", //
        scrub: 5,
      },
      x: 0,
      scale: 1,
      opacity: 1,
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
      <div className={styles.containerPortfolio}>
        <h2 className={styles.heading}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
          ref={headingRef}
        >P
          <span className={styles.asterisk} ref={asteriskRef}>
            <img src="vector2.png" alt="" />
          </span>
          rft
          <span className={styles.asterisk} ref={asteriskRef2}>
            <img src="greenStar2.png" alt="" />
          </span>
          li
          <span className={styles.asterisk} ref={asteriskRef3}>
            <img src="starYellow.png" alt="" />
          </span>
        </h2>
        <div className={styles.containerProject} ref={project1}>
          <Project
          picture={'blog.png'}
          tags={['Next.js', 'Wordpress']}
          title={'The one way journey'}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
          </Project>
        </div>
        <div className={styles.containerProject} ref={project2}>
          <Project
          picture={'ecommerce.png'}
          tags={['React', 'Api']}
          title={'Ibuy ecommerce'}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
        </Project>
        </div>
        <div className={styles.containerProject} ref={project3}>
          <Project
          picture={'blog.png'}
          tags={['HTML', 'css']}
          title={'The one way journey'}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
        </Project>
        </div>
      </div>
    </section>
  )
}

export default Portfolio