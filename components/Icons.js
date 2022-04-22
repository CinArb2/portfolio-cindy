import styles from '../styles/Icons.module.css'

const Icons = ({iconInfo, show}) => {
  return (
    <>
      <span className={`${styles.iconsTag} ${show === iconInfo.id? styles.show: ''}`}>{iconInfo.name}</span>
      <span className={`${styles.iconsSkills} ${show === iconInfo.id? styles.show: ''}`}>
        {iconInfo.icon}
      </span>
    </>
  )
}

export default Icons