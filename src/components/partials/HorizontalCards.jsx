import { Link } from "react-router-dom";
import noimage from '../../../public/no-image.jpg'

function HorizontalCrads({data}) {
  console.log(data);
  
  return (
    <div className='w-full pl-5 mt-[-1%]'>
      
      <div className='min-w-[100%] flex overflow-x-auto'>
        {data.map((d, i) => (<Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] h-[30vh] mr-5 border rounded-lg font-semibold border-zinc-500">
          <img className="w-full h-[55%] object-cover rounded-lg" src={ d.poster_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${ d.poster_path || d.profile_path}` : noimage} alt="" />
          <h1 className='text-sm w-[100%] font-medium mt-2 pl-2 font-black text-white'>{d.name || d.title || d.original_name || d.original_title}</h1>
      <p className='w-[100%] text-xs p-1  text-white'>{d.overview.slice(0, 60)} ... <Link className='text-zinc-400'>more</Link></p>
        </Link>))}
      </div>
    </div>
  )
}


export default HorizontalCrads