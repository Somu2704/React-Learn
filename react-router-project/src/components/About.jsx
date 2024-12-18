import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate=useNavigate();

    function handleClick(){
        navigate('/dashboard');
    }
  return (
    <div>
        About
        <button onClick={handleClick} >
            move to dashboard
        </button>
    </div>
  )
}

export default About