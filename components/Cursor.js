import React, { useEffect, useRef } from 'react'
import { useStore } from '../storeZustand/store'
import { gsap } from "gsap";
import styles from '../styles/Home.module.css'

const Cursor = () => {
  const isBig = useStore(state => state.isBig)
  const isLight = useStore(state => state.isLight)
  const cursor = useRef()
  const follower = useRef()

  const cursorMove = (e) => {
    const { clientX, clientY } = e;

    const mouseX = clientX;
    const mouseY = clientY;
      
    cursor.current.style.transform = `translate3d(${mouseX - cursor.current.clientWidth / 2}px, ${mouseY - cursor.current.clientHeight / 2}px, 0)`

    
    gsap.to(follower.current, {
        transform: `translate3d(${mouseX - follower.current.clientWidth / 2}px, ${mouseY - follower.current.clientHeight / 2}px, 0)`,
        ease: "none"
      })
  }

  useEffect(() => {
    document.addEventListener('mousemove', cursorMove)
    return () => document.removeEventListener('mousemove', cursorMove);
  }, [])

  return (
    <div>
      <div className={`${styles.cursor} ${isLight ? styles.light : ''}`} ref={cursor}></div>
      <div
        className={`${styles.follower} 
        ${isBig ? styles.grow : ''}
        ${isLight ? styles.light : ''}`}
        ref={follower}>
      </div>
    </div>
  )
}

export default Cursor