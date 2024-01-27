import React from 'react'
import styles from './Display.module.css'


const Display = ({displayValue}) => {
  return (
    <center >
        <div className={styles.display}>
            <input type="text" className={styles.input} value={displayValue} readOnly/>
        </div>
    </center>
  )
}

export default Display