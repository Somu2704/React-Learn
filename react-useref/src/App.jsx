import { useState,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[time, setTime] = useState(0);
  // let var1=useRef(0);
  // let btnRef=useRef();

  // function handleClick(){
  //   var1.current=var1.current+1;
  //   console.log("value of the variable:",var1.current);
  //   setCount(count+1);
  // }

  // useEffect(() => {
  //   console.log("i came again for rendering")
  // },)


  // function handleColorChange(){
  //   btnRef.current.style.backgroundColor="red";
  // }
  let timeRef=useRef(null);

  
  function handleStart(){
      timeRef.current=setInterval(()=>{
        setTime(time=>time+1)
      },1000);
      console.log("start",timeRef.current);
  }
  function handleStop(){
    clearInterval(timeRef.current);
    timeRef.current=null;
    console.log("stopped!");

  }
  function handleReset(){
    handleStop();
    setTime(0);
    console.log("reset!");
  }

  return (
    <>

      {/* <div>
        <button 
        ref={btnRef}

        onClick={handleClick} >
          count
          </button>
          <h2>
            count value:{count}
          </h2>
          <br />
          <button 
            onClick={handleColorChange}
          >
            change-color-btn
          </button>
      </div> */}

      <div>
        <h1>stop watch</h1>
        <h2>{time}</h2>

        <button onClick={handleStart} >
          start
        </button>
        <br />
        <br />
        <button onClick={handleStop} >
          stop
        </button>
        <br />
        <br />
        <button onClick={handleReset} >
          reset
        </button>
      </div>

    </>
  )
}

export default App
