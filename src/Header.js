import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
      <h1>My ToDo List  <NavLink to='list'><i class="fa-solid fa-list" ></i></NavLink></h1>
      <ul>
        <li><Link to='/'>Home <i class="fa-solid fa-house"></i></Link></li>
        <li><Link to='register'>Register <i class="fa-solid fa-house"></i></Link></li>
        {/* <li>About <i class="fa-solid fa-address-card"></i></li> */}
        <li><Link to='login'>Login<i class="fa-solid fa-address-card"></i></Link></li>
        <li><Link to="logout">Logout <i class="fa-solid fa-right-from-bracket"></i></Link></li>
        {/* <li>Email <i class="fa-solid fa-envelope"></i></li> */}
        <li>Contact <i class="fa-solid fa-address-book"></i></li>
      </ul>
    </div>
  )
}

export default Header



