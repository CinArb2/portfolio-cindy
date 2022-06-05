import React from 'react'
import styles from '../styles/Form.module.css'

const Form = ({
  isVisible,
  setVisible,
  handleSubmit,
  formData,
  setFormData,
  setBtnContact,
  handleChange }) => {
    
  
  const handleCancel = () => {
    setFormData({
    fullName: '',
    email: '',
    subject: '',
    comment: '',
  })
    setVisible(false)
    setBtnContact(true)
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className={isVisible ? `${styles.containerForm} ${styles.visible}` : styles.containerForm}>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        placeholder='Full name'
        onChange={handleChange}
        className={styles.inputForm}
        required />
    
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder='Email'
        onChange={handleChange}
        className={styles.inputForm}
        required />
      
      <input
        type="text"
        name="subject"
        value={formData.subject}
        placeholder='Subject'
        onChange={handleChange}
        className={styles.inputForm}
        required />
    
      <textarea
        value={formData.comment}
        name='comment'
        placeholder='Say hi!'
        className={styles.inputForm}
        cols="30"
        rows="5"
        onChange={handleChange}
      />

      <div className={styles.containerBtns}>
        <button type='reset'
          onClick={handleCancel}
        >Cancel</button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default Form