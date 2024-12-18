import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
    function handleClick(){
        navigate('/about');
    }
  return (
    <div>Home
        <button onClick={handleClick} >
            move to about
        </button>
    </div>
  )
}

export default Home