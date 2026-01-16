import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Movielist from '../Movielist/Movielist'
import styles from './Home.module.css'
import { ThemeContext } from '../../Components/Contextapi/ThemecontextApi'

const Home = ({ favlist }) => {
  let localdata = JSON.parse(localStorage.getItem("all-item")) || []
  const [moviename, setmoviename] = useState("")
  const [moviedata, setmoviedata] = useState(localdata)
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  let moviekey = 'cab9c0834cb39cc84ed4d68048c9e03e'

  let { Theme} = useContext(ThemeContext)

  useEffect(() => {
    if (!moviename) return
    setloading(true)
    async function fetchdata() {
      try {
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${moviekey}&query=${moviename}`)
        setmoviedata(res.data.results)
        localStorage.setItem("all-item", JSON.stringify(res.data.results))
        seterror('')
      } catch (error) {
        seterror('something are wrong')
      } finally {
        setloading(false)
      }
    }
    fetchdata()
  }, [moviename])



  return (
    <div className={`${styles.homecontainer} ${Theme ? styles.light : styles.dark} `}>
      <Searchbar loading={loading} error={error} moviedata={moviedata} moviename={moviename} setmoviename={setmoviename} />
      <Movielist moviedata={moviedata} favlist={favlist} />

    </div>
  )
}

export default Home