import './App.css'
import ClockBody from './components/ClockBody'
import ClockCurrent from './components/ClockCurrent'
import ClockHeading from './components/ClockHeading'

function App() {

  return (
    <center>
      <ClockHeading />
      <ClockBody />
      <ClockCurrent />
    </center>
  )
}

export default App
