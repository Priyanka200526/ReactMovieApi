import React, { useContext } from 'react'
import styles from './Favorites.module.css'
import { ThemeContext } from '../../Components/Contextapi/ThemecontextApi'
const Favorites = ({ deletefavitem, favitem }) => {
  let { Theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.favoritescontainer} ${Theme ? styles.light : styles.dark}`}>
      <h1>My Favorites Movies</h1>
      {favitem.map((item, idx) => (
        <div key={idx} className={styles.favcard}>
          {
            item.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" width="200" />
            ) : (
              <p>Image not found</p>
            )
          }
          <h2>{item.title}</h2>
          <button onClick={() => deletefavitem(idx)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Favorites