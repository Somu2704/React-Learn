import React from 'react'

const Card = (props) => {
  return (
    <>
    <div>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>
            hi type ur name:{props.name}
        </p>
    </div>
    
    </>
  )
}

export default Card;