import React from 'react'
import styles from './Conatiner.module.css'


const Conatiner = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Conatiner