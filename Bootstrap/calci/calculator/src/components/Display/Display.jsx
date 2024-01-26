import React from 'react'
import styles from './Display.module.css'


const Display = () => {
  return (
    <center >
        <div className={styles.display}>
            <input type="text" className={styles.input}/>
        </div>
    </center>
  )
}

export default Display