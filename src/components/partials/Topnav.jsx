import axios from '../../utils/Axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '../../../public/no-image.jpg'

function Topnav() {
  const [query, setquery] = useState("")
  const [Searches, setSearches] = useState([]);

  const getSearches = async () => {
    try{
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results)
      console.log(Searches)
    }catch(err){
      console.log("Error:",err)
    }
  }

  useEffect(() => {
    getSearches();
  }, [query])

  return (
    <div className='w-full z-[100] h-[10vh] relative flex justify-start items-center ml-[15%]'>
        <i className="text-zinc-400 text-3xl ri-search-line"></i>
        <input onChange={(e) => setquery(e.target.value)} value={query } type="text" name="" placeholder='Search anything' className='w-[50%] h-12 text-zinc-200 mx-10 p-5 outline-none border-none text-xl bg-zinc-700 rounded-lg' />
        {query.length > 0 && (<i onClick={() => setquery("")} className="text-zinc-400 text-3xl ml-[-2vw] ri-close-line cursor-pointer duration-200"></i>)}

        <div className='absolute w-[50%] mt-[-0.5%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded ml-[6%]'>
          {
            Searches.map((s, i) => (
              <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-6 flex gap-4 items-center border-b-2 border-zinc-100'>
          <img src={s.backdrop_path || s.poster_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.poster_path || s.profile_path}` : noimage} className='w-32 h-32 rounded object-cover shadow' alt="" />
          <span>{s.name || s.title || s.original_name || s.original_title}</span>
          </Link>
            ))
          }
        </div>
    </div>
  )
}

export default Topnav