import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [input,setInput]=useState(0);

  function handleIncrement(){
    setCount(count+1);
    console.log(count);
  }
  function expensiveTask(num){
    console.log("Inside Expensive Task");
      for(let i=0;i<100000000;i++){

      }
    return num*2;
  }
  
  let doubleValue=useMemo(() => expensiveTask(input), [input]);;

  
  return (
    <>
    <div>
      <button onClick={handleIncrement} >
        increment
      </button>
      <br />
      <h2>Count:{count}</h2>
      <br />
      <br />
      <input type="number"
      placeholder='enter the number'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <br />
      <h2>
        doublevalue:{doubleValue}
      </h2>
    </div>
      
    </>
  )
}

export default App
