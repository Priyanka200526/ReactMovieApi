import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './MovieDetails.module.css'
import { ThemeContext } from '../../Components/Contextapi/ThemecontextApi'
const MovieDetails = () => {
  let { id } = useParams()
  const [movie, setmovie] = useState(null)
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  let moviekey = 'cab9c0834cb39cc84ed4d68048c9e03e'
  let navigate = useNavigate()
  let { Theme } = useContext(ThemeContext)

  useEffect(() => {
    setloading(true)
    async function fetchdata() {
      try {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${moviekey}&language=en-US`)
        setmovie(res.data)
        console.log(res.data);

        seterror('')
      } catch (error) {
        seterror('Failed to fetch movie details')
      } finally {
        setloading(false)
      }
    }
    fetchdata()
  }, [id])
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!movie) return null

  return (
    <div className={`${styles.moviedetailscontainer} ${Theme ? styles.light : styles.dark}`}>
      <div style={{ padding: "20px" }} className={`${styles.cardDetails} ${Theme ? styles.cardlight : styles.carddark}`}>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <h1>{movie.title}</h1>
        <h3>{movie.tagline}</h3>
        <p><strong>Language:</strong> {movie.spoken_languages[0]?.english_name || 'N/A'}</p>
        <p><strong>Popularity:</strong> {movie.popularity}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
        <p><strong>Status:</strong> {movie.status}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Runtime:</strong> {movie.runtime} mins</p>
        <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
        <p>{movie.overview}</p>

        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>

    </div>
  )
}

export default MovieDetails