import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css';
import { ThemeContext } from '../Contextapi/ThemecontextApi';
const Nav = () => {
  let { Theme, setTheme } = useContext(ThemeContext)
  return (
    <div>
      <div className={`${styles.navbar} ${Theme ? styles.light : styles.dark}`}>
        <h2>🎬 MovieHub</h2>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </nav>
        <button onClick={() => setTheme(!Theme)}>{!Theme ? "🌙" : "☀️"}</button>
      </div>
    </div>
  )
}

export default Nav