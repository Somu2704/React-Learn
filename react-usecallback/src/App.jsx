import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick=useCallback(()=>{
    setCount(count+1);
  },[]);
  //usecallback helps in preventing the function re-rendering again and again ,also to freeze the function.

  return (
    <>
      <div>
        <h2>count: {count}</h2>
        <button onClick={handleClick} >
          increment
        </button>
        <br />
        <br />
        <ChildComponent buttonName="click-me" handleClick={handleClick} />
      </div>
    </>
  )
}

export default App
