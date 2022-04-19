import styles from '../styles/Portfolio.module.css'
import Heading from './Heading'
import Project from './Project'
import blogPicture from '../public/blog.png'
import ecommerce from '../public/ecommerce.png'

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className={styles.wrapperPortfolio}>
      <div className={styles.containerPortfolio}>
        <Heading number={'02'}>
          Porftolio
        </Heading>
        <p className={styles.textPortfolio}>
          Hi Everyone, I am a Front End developer from Colombia, writing code and moving pixels in the WWW. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, et.
        </p>
        <Project
          picture={blogPicture}
          tags={['Next.js', 'Wordpress']}
          title={'The one way journey'}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
        </Project>
        <Project
          picture={ecommerce}
          tags={['React', 'Api']}
          title={'Ibuy ecommerce'}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
        </Project>
        <Project
          picture={blogPicture}
          tags={['HTML', 'css']}
          title={'The one way journey'}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates placeat neque amet, dolor voluptatum excepturi debitis deleniti hic ipsum.</p>
        </Project>
      </div>
    </section>
  )
}

export default Portfolio