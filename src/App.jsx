import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshow from './components/Tvshow'
import People from './components/People'
import About from './components/About'
import ContectUs from './components/ContectUs'
import MovieDetail from './components/MovieDetail'
import TvDetail from './components/TvDetail'
import PersonDetail from './components/PersonDetail'
import Trailer from './components/partials/Trailer'
import Notfound from './components/Notfound'

function App() {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetail/>}/>
        <Route path='/movie/details/:id/Trailer' element={<Trailer/>} />
        <Route path="/tvshow" element={<Tvshow/>} />
        <Route path="/tv/details/:id" element={<TvDetail/>} />
        <Route path='/tv/details/:id/Trailer' element={<Trailer/>} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PersonDetail/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<ContectUs/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App