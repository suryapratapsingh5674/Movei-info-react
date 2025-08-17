import { Link } from "react-router-dom";
import noimage from '../../../public/no-image.jpg'

function HorizontalCrads({data}) {
  console.log(data);
  
  return (
    <div className='w-full px-3 sm:px-4 md:px-5 mt-[-1%]'>
      <div className='w-full flex overflow-x-auto no-scrollbar gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-4 pt-2'>
        {data.map((d, i) => (
          <Link 
            to={`/${d.media_type}/details/${d.id}`} 
            key={i} 
            className="
              flex-shrink-0
              w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[220px]
              h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] xl:h-[340px]
              bg-[#1F1E24] 
              border border-zinc-600 
              rounded-lg 
              overflow-hidden
              hover:scale-105 hover:border-[#6556CD] hover:shadow-lg hover:shadow-[#6556CD]/20
              transition-all duration-300 ease-in-out
              group
            "
          >
            {/* Image Container */}
            <div className="relative w-full h-[65%] overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                src={d.poster_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.poster_path || d.profile_path}` : noimage} 
                alt={d.name || d.title || d.original_name || d.original_title || "Movie/TV Show"}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content Container */}
            <div className="p-2 sm:p-3 h-[35%] flex flex-col justify-between">
              <div>
                <h1 className='text-xs sm:text-sm md:text-base font-semibold text-white line-clamp-2 group-hover:text-[#6556CD] transition-colors duration-200'>
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
                <p className='text-xs text-zinc-400 mt-1 sm:mt-2 line-clamp-2 leading-relaxed'>
                  {d.overview ? 
                    `${d.overview.slice(0, window.innerWidth < 640 ? 40 : window.innerWidth < 768 ? 50 : 60)}...` : 
                    'No description available'
                  }
                </p>
              </div>
              
              {/* Rating Badge (if available) */}
              {d.vote_average && d.vote_average > 0 && (
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1">
                    <i className="ri-star-fill text-yellow-500 text-xs"></i>
                    <span className="text-xs text-zinc-300 font-medium">
                      {d.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500">
                    {d.release_date ? d.release_date.split('-')[0] : d.first_air_date ? d.first_air_date.split('-')[0] : ''}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCrads