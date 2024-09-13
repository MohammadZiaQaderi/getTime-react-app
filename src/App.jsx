import { useState } from "react";



function App() {

  //let now=new Date().toLocaleTimeString();
  const [time, setTime]=useState(new Date().toLocaleTimeString());

  function getTime() {
     setTime(new Date().toLocaleTimeString())
  }
  //setInterval(getTime,1000)
  return (
    <>
    <h2>TIME: {time}</h2>
    <button onClick={getTime}>Get Time</button>
    </>
  )
}
export default App;