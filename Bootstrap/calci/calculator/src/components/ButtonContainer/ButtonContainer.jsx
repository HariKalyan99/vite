import React from 'react'
import styles from './ButtonContainer.module.css';


const ButtonContainer = ({onButtonClick}) => {
  const buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={styles.btnContainer}>
        {buttons.map((btn, ind) => (
        <button key={ind} className={styles.buttonsize} onClick={() => onButtonClick(btn, ind)}>{btn}</button>
    )) }
    </div>
  )
}

export default ButtonContainer