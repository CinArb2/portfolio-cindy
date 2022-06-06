import styles from '../styles/Icons.module.css'

const Icons = ({iconInfo}) => {
  return (
    <>
      <span
        className={styles.iconsSkills}
      >
        {iconInfo.icon}
      </span>
    </>
  )
}

export default Icons