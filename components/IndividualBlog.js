import React from 'react'
import styles from '../styles/IndividualBlog.module.css'
import Image from 'next/image'

const IndividualBlog = ({data}) => {
  return (
    <div className={styles.individualPost}>
      <div className={styles.containerImage}>
        <Image
          src={data.social_image}
          alt="project blog"
          objectFit="cover"
          layout="intrinsic"
          height={400}
          width={750}
          />
      </div>
    </div>
  )
}

export default IndividualBlog