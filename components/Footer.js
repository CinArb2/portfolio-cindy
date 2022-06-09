import styles from '../styles/Footer.module.css'
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import { FaDev } from 'react-icons/fa';
import { BsHeartHalf } from 'react-icons/bs';
import React, { useContext, useState } from 'react'
import { SiNextdotjs } from 'react-icons/si';
import Form from './Form';
import LoaderContext from '../context/LoaderContext';
import Loader from '../components/Loader'
import Message from './Message';
import { useStore } from '../storeZustand/store';

const Footer = () => {
  const growCircle = useStore((state) => state.growCircle)
  const decreaseCircle = useStore((state) => state.decreaseCircle)
  const circleLight = useStore((state) => state.circleLight)
  const circleDark = useStore((state) => state.circleDark)
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    comment: '',
  })

  // form
  const [isVisible, setVisible] = useState(false)
  const { loading, setLoading } = useContext(LoaderContext);
  const [message, setMessage] = useState('')
  const [showMsg, setShowMsg] = useState(false)
  const [btnContact, setBtnContact] = useState(true)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      return {
        ...prev,
        [name]:  value,
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setVisible(false)
    setLoading(true)
    setShowMsg(true)
    const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: formData.email,
          fullname: formData.fullName,
          subject: formData.subject,
          message: formData.comment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    
    const { error } = await res.json();

    
    setLoading(false)

    if (error) {
      setMessage('Error, try again')
      
    } else {
      setMessage('Thanks, for contacting me. I\'ll replay to you asap :)')
    }

    setTimeout(() => {
      setShowMsg(false)
      setBtnContact(true)
    }, 5000)
  }

  const handleEnter = () => {
    growCircle()
  }

  const handleMouseLeave = () => {
    decreaseCircle()
  }

  const handleLightCursor = () => {
    circleLight()
  }

  const handleDarkCursor = () => {
    circleDark()
  }

  const handleBtnContact = () => {
    setBtnContact(false)
    setVisible(true)
  }

  return (
    <footer
      id='contact'
      className={styles.footer}
      onMouseEnter={handleLightCursor}
      onMouseLeave={handleDarkCursor}
    >
      <div className={styles.contacMe}>
        <p className={styles.textContactme}
          onMouseEnter={handleEnter}
          onMouseLeave={handleMouseLeave}
        >
          If you want to talk about any project or just get in touch</p>
        
        <div
          onClick={handleBtnContact}
          className={btnContact ? styles.containerBtnContact : `${styles.containerBtnContact} ${styles.visible}`}
        >
          <img src="/contacMeWhite.png" alt="" />
        </div>
        <div>
          <Form
            isVisible={isVisible}
            setVisible={setVisible}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            setBtnContact={setBtnContact}
            handleSubmit={handleSubmit}
          />
          <div
            className={showMsg ? `${styles.loaderContainer} ${styles.visible}` : styles.loaderContainer}
          >
            {loading ? <Loader /> : <Message message={message} />}
          </div>
        </div>
      </div>
      <div className={styles.listSocial}>
        <div>
          <p>© 2022</p>
        </div>
        <div>
          <a href="https://github.com/CinArb2" target="_blank" rel="noopener noreferrer" >
            <AiFillGithub className={styles.socials} />
          </a>
          <a href="https://www.linkedin.com/in/cindy-paola-a-b55583224/" target="_blank" rel="noopener noreferrer" >
            <GrLinkedin className={styles.socials} />
          </a>
          <a href="https://dev.to/cinarb2" target="_blank" rel="noopener noreferrer" >
            <FaDev className={styles.socials}/>
          </a>
        </div>
        <div>
          <p>Made with <BsHeartHalf/></p>
        </div>
      </div>
      <div className={styles.portfolioDetail}>
        <p>This Website was built with <SiNextdotjs /></p>
      </div>
    </footer>
  )
}

export default Footer