import { useEffect, useState } from "react";

const ClockCurrent = () => {
  let currentTime = new Date();

  const [getTime, setTime] = useState("");
  const [getDate, setDate] = useState("");

  useEffect(() => {
    setTimeout(() => {
        setTime(currentTime.toLocaleTimeString())
        setDate(currentTime.toDateString())
    }, 1000)
  },[getTime, getDate])

  return (
    <div><h1 className="fw-bolder">{getDate} - {getTime}</h1>
    {getTime === "4:45:00 PM" && <h1 style={{color: 'red'}}>Alaram</h1>}
    </div>
  )
}

export default ClockCurrent