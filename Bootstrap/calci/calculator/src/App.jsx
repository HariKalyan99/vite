import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css';
import Display from './components/Display/Display'
import ButtonContainer from './components/ButtonContainer/ButtonContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
    <Display />
    <ButtonContainer />
    </div>
  )
}

export default App
