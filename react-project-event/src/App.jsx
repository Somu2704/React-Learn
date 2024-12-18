import { useState } from 'react'
import './App.css'

function App() {
  
  function handleInputChange(e){
    console.log("value till now:", e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("once submitted form will not be changed again")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button  type='button' >submit</button>
    </form>
    </>
  )
}

export default App
