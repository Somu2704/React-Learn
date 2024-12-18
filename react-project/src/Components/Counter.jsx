import React from 'react'
import {useState} from 'react'
import './Counter.css'

const Counter = (props) => {
    const [count,setCount]=useState(0);
  return (
    <div className='counter-container' >
        <p id='para' >
            u have clicked {props.count} times
        </p>
        <p>
            {props.children}
        </p>
          <button id='btn' onClick={props.handleClick} > click me </button>

    </div>
  )
}

export default Counter