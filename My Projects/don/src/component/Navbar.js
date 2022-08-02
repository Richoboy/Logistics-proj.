import React from 'react'
import {NavLink,} from 'react-router-dom'
//import Navstyle from './Navstyle'

 const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <ul className='nav-items'>
          <li className='nav-list'>
          <NavLink className='nav-link' to='/'>Home</NavLink></li>
            <li className='nav-list'>
              <NavLink className='nav-link' to='/BecomeADriver'>Dropple App</NavLink></li>
            <li className='nav-list'>
              <NavLink className='nav-link' to='/DroppleApp'>Become a driver</NavLink></li>
            <li className='nav-list'>
              <NavLink className='nav-link' to='/About'>About</NavLink></li>
            <li className='nav-list'>
            <NavLink className='nav-link' to='/Login'><span>Login</span></NavLink></li>
        </ul>
       
      </div>
    </nav>
  )
}


export default Navbar;