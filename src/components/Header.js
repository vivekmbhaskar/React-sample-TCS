import classes from '../CSS-Files/Header.module.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <div className={classes.Header}>
      <Link to='/'><h1>inDetail</h1></Link>
      <ul>
        <li><NavLink to='/saved' className={(data) => data.isActive ? classes.activeLink : ''}>Saved</NavLink></li>
        <li><NavLink to='/about' className={(data) => data.isActive ? classes.activeLink : ''}>About</NavLink></li>
      </ul>
    </div>
  )
}

export default Header