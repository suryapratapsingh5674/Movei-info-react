import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='w-full h-[50vh] flex flex-col justify-end items-start pl-[8%] pb-[4%]'>
      <h1 className='text-5xl w-[70%] font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>
      <p className='w-[70%] mt-3 text-white'>{data.overview.slice(0, 200)} ... <Link to={`${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link></p>
      <p className='text-white flex gap-x-2 items-center mt-2'>
        <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date || "No_info"}
        <i className="ml-4 text-yellow-500 ri-album-fill"></i> {data.media_type.toUpperCase() || "No_info"}
      </p>
      <Link to={`${data.media_type}/details/${data.id}/Trailer`} className='bg-[#6556CD] hover:bg-[#5949c1] text-white font-semibold rounded p-3 mt-5'>Watch trailer</Link>
    </div>
  )
}

export default Header