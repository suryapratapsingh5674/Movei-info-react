import { Link } from "react-router-dom";
import noimage from '../../../public/no-image.jpg'

function HorizontalCrads({data}) {
  console.log(data);
  
  return (
    <div className='w-full pl-2 sm:pl-3 md:pl-5 mt-[-1%]'>
      <div className='min-w-[100%] flex overflow-x-auto no-scrollbar gap-2 sm:gap-3 md:gap-5 pb-4'>
        {data.map((d, i) => (
          <Link 
            to={`/${d.media_type}/details/${d.id}`} 
            key={i} 
            className="min-w-[140px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[15%] h-[250px] sm:h-[280px] md:h-[30vh] border rounded-lg font-semibold border-zinc-500 flex-shrink-0 hover:scale-105 transition-transform duration-200"
          >
            <img 
              className="w-full h-[60%] sm:h-[55%] object-cover rounded-t-lg" 
              src={d.poster_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.poster_path || d.profile_path}` : noimage} 
              alt="" 
            />
            <div className="p-2">
              <h1 className='text-xs sm:text-sm font-medium text-white line-clamp-2'>
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className='text-xs text-white mt-1 line-clamp-2'>
                {d.overview ? `${d.overview.slice(0, 60)}...` : 'No description available'} 
                <Link className='text-zinc-400 ml-1'>more</Link>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default HorizontalCrads