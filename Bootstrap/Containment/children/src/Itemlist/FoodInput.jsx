import React from 'react'
import styles from './FoodInput.module.css'

const FoodInput = ({handleInput}) => {
  return (
    <input type="text" className={styles.foodInput} onKeyDown={handleInput}/>
  )
}

export default FoodInput