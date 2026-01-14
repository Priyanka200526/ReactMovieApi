import React from 'react'
import styles from './Searchbar.module.css'
const Searchbar = ({ loading, error, moviedata, moviename, setmoviename }) => {
  return (
    <div className={styles.container}>
      {!loading && moviedata.length === 0 && moviename && 'No Found Movie'}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <input type="text"
        placeholder='Enter your movies'
        value={moviename}
        onChange={(e) => setmoviename(e.target.value)}
      />
    </div>
  )
}

export default Searchbar