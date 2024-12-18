import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  //first-> side effect function 
  //second->clean up function
  //third-> comma sepearated list
  //var1:
  //runs on every render,no dependencies list
  // useEffect(()=>{
  //   alert("i will run on each render");
  // });
  //var2:
  //runs on only first render
  useEffect(()=>{
    // alert("i will run on first render")
    alert("i will run on count increament")
  },[count])
  
  function handleClick(){
    setCount(count+1);
  }


  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick} >click me</button>
      </div>
    </>
  )
}

export default App
