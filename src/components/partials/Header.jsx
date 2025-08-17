import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='w-full h-[40vh] sm:h-[45vh] md:h-[50vh] flex flex-col justify-end items-start pl-[4%] sm:pl-[6%] md:pl-[8%] pb-[6%] sm:pb-[5%] md:pb-[4%]'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-[80%] md:w-[70%] font-black text-white leading-tight'>
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className='w-[90%] sm:w-[80%] md:w-[70%] mt-2 md:mt-3 text-white text-sm sm:text-base leading-relaxed'>
        {data.overview.slice(0, window.innerWidth < 640 ? 100 : 200)} ... 
        <Link to={`${data.media_type}/details/${data.id}`} className='text-blue-400 ml-1'>more</Link>
      </p>
      <p className='text-white flex flex-col sm:flex-row gap-1 sm:gap-x-2 items-start sm:items-center mt-2 text-sm sm:text-base'>
        <span className='flex items-center gap-1'>
          <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date || "No_info"}
        </span>
        <span className='flex items-center gap-1'>
          <i className="text-yellow-500 ri-album-fill"></i> {data.media_type.toUpperCase() || "No_info"}
        </span>
      </p>
      <Link 
        to={`${data.media_type}/details/${data.id}/Trailer`} 
        className='bg-[#6556CD] hover:bg-[#5949c1] text-white font-semibold rounded p-2 sm:p-3 mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base transition-colors duration-200'
      >
        <i className="ri-play-fill mr-1"></i>
        Watch trailer
      </Link>
    </div>
  )
}

export default Header