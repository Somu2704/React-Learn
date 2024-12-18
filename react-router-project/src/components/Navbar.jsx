import React from 'react'
import {NavLink} from 'react-router-dom'
import Home from './Home'
import About from './About'
import DashBoard from './DashBoard'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive})=>isActive ? "active-link" : " "} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>isActive ? "active-link" : " "}  >About</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive})=>isActive ? "active-link" : " "}   >DashBoard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar