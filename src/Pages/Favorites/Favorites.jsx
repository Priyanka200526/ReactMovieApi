import React from 'react'
import styles from './Favorites.module.css'
const Favorites = ({ deletefavitem, favitem }) => {
  return (
    <div className={styles.favoritescontainer}>
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