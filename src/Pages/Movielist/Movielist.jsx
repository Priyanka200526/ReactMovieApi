import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Movielist.module.css'
const Movielist = ({ moviedata, favlist }) => {
    let navigate = useNavigate()
    return (
        <div className={styles.movielistcontainer}>
            {moviedata.map((item) => (
                <div key={item.id} className={styles.card}>
                    {item.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" width="200" />
                    ) : (
                        <p>Image not found</p>
                    )}
                    <h2>{item.title}</h2>
                    <p><strong>Relaese date: </strong>{item.release_date} <strong> Rating:</strong> {item.vote_average}</p>
                    <p>{item.overview}</p>
                    <button onClick={() => navigate(`/movieDetails/${item.id}`)}>
                        View Details
                    </button>

                    <button onClick={() => {
                        favlist(item)
                        navigate('./Favorites')
                    }}>
                        ❤️ Add to Favorite
                    </button>
                </div>
            ))
            }
        </div >
    )
}

export default Movielist