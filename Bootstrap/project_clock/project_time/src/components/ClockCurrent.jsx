import { useEffect, useState } from "react";

const ClockCurrent = () => {
  // let currentTime = new Date();
  // let [getTime1, setTime1] = useState(currentTime);
  let [getTime1, setTime1] = useState(new Date);

  // const [getTime, setTime] = useState("");
  // const [getDate, setDate] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //       setTime(currentTime.toLocaleTimeString())
  //       setDate(currentTime.toDateString())
  //   }, 1000)
  // },[getTime, getDate])

  // 2nd way and a responsible coder will always remove or add a clean up function

  useEffect(() => {
    console.log("Started the interval");
    const intervalId = setInterval(() => {
      setTime1(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the previous interval");
    };
  }, []);

  return (
    <div>
      <h1 className="fw-bolder">
        {getTime1.toLocaleDateString()} - {getTime1.toLocaleTimeString()}
      </h1>
      {getTime1 === "4:45:00 PM" && <h1 style={{ color: "red" }}>Alaram</h1>}
    </div>
  );
};

export default ClockCurrent;
