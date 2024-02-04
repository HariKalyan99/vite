import React from 'react'
import { useSelector } from 'react-redux'

const Displaycounter = () => {

    // const counter = useSelector((store) => store.counter)

    const {counterVal} = useSelector((store) => store.counter)


  return (
    <h4>Counter Current value: {counterVal}</h4>
  )
}

export default Displaycounter