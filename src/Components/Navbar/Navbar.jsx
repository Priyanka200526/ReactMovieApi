import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2>🎬 MovieHub</h2>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/favorites'}>Favorites</NavLink>
      </nav>
      <h2> 🌙</h2>
    </div>
  )
}

export default Navbar