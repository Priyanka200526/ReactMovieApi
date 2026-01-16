import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import MovieDetails from './Pages/MovieDetails/MovieDetails'
import Favorites from './Pages/Favorites/Favorites'
import Nav from './Components/nav/Nav'
const App = () => {
  const Favlocaldata = JSON.parse(localStorage.getItem("fav-item")) || []
  const [favitem, setfavitem] = useState(Favlocaldata)

  function favlist(item) {
    let exist = favitem.some(f => f.id === item.id)
    if (!exist) {
      let updatearray = [...favitem, item]
      setfavitem(updatearray)
      localStorage.setItem("fav-item", JSON.stringify(updatearray))
    }
  }

  function deletefavitem(idx) {
    const list = favitem.filter((_, i) => i !== idx)
    setfavitem(list)
    localStorage.setItem("fav-item", JSON.stringify(list))
  }

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home favitem={favitem} setfavitem={setfavitem} favlist={favlist} />} />
        <Route
          path="/favorites"
          element={<Favorites favitem={favitem} deletefavitem={deletefavitem} />}
        />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
      </Routes>
    </>
  )
}


export default App