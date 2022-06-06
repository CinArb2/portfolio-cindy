import styles from '../styles/Icons.module.css'

const Icons = ({iconInfo}) => {
  return (
    <>
      <span
        className={styles.iconsSkills}
      >
        {iconInfo.icon}
      </span>
      <span
        className={styles.iconTag}
      >
        {iconInfo.name}
      </span>
    </>
  )
}

export default Icons