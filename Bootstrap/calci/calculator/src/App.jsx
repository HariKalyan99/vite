import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css';
import Display from './components/Display/Display'
import ButtonContainer from './components/ButtonContainer/ButtonContainer';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (val, ind) => {
    if(val === 'C'){
      setCalVal("")
    }else if(val === '=' && !calVal){
      alert("promise me you add some values and then press equal to")
    }else if(val === '='){
      const res = eval(calVal);
      setCalVal(res);
    }
    else{
      setCalVal(calVal + val);
    }
  }
  

  return (
    <div className={styles.container}>
    <Display displayValue={calVal}/>
    <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
