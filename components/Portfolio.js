import styles from '../styles/Portfolio.module.css'
import Project from './Project'
import blogPicture from '../public/blog.png'
import ecommerce from '../public/ecommerce.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);

  useEffect(() => {
    
    gsap.to(box2.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: box1.current },
    });
    // gsap.to(box3.current, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   scrollTrigger: { trigger: box1.current },
    // });

     gsap.to(box4.current,
         {
           opacity: 1,
           x: 0,
           duration: 1,
           scrollTrigger: {
             trigger: box3.current,
             start: "top top",
           }
         })
    gsap.to(box5.current,
         {
           opacity: 1,
           x: 0,
           duration: 1,
           scrollTrigger: {
             trigger: box4.current,
             start: "top top",
           }
         })
    gsap.to(box6.current,
         {
           opacity: 1,
           x: 0,
           duration: 1,
           scrollTrigger: {
             trigger: box5.current,
             start: "top top",
           }
         })
    
  }, []);

  return (
    <section
      id='portfolio'
      ref={box1}
      className={styles.wrapperPortfolio}>
      <div className={styles.containerPortfolio}>
        <h2 className={styles.heading} ref={box2}>02/Porftolio</h2>
        {/* <p className={styles.textPortfolio} ref={box3}>
          Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
        </p> */}
        <div className={styles.containerProject} ref={box4}>
          <Project
          picture={blogPicture}
          tags={['Next.js', 'Wordpress']}
          title={'The one way journey'}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
          </Project>
        </div>
        <div className={styles.containerProject} ref={box5}>
          <Project
          picture={ecommerce}
          tags={['React', 'Api']}
          title={'Ibuy ecommerce'}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
        </Project>
        </div>
        <div className={styles.containerProject} ref={box6}>
          <Project
          picture={blogPicture}
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