import React from 'react'
import './UserCard.css'
import profilepic from'../assets/profilepic.jpg'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name} </p>
      <img id='user-img' src={props.image} alt="soms " />
      <p id='user-desc' > {props.desc} </p>
    </div>
  )
}

export default UserCard
