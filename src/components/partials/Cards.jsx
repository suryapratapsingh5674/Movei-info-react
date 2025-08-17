import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Cards({data, title}) {
  console.log(data);
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 w-full px-3 sm:px-[5%] bg-[#1F1E24] pb-[10vh]">
        {data.map((c, i)=> (
            <Link 
              to={`/${c.media_type || title}/details/${c.id}`} 
              className="relative group hover:scale-105 transition-transform duration-200" 
              key={i}
            >
              <img 
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover" 
                src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.profile_path || c.backdrop_path}`} 
                alt="" 
              /> 
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mt-2 font-semibold line-clamp-2">
                {c.name || c.title || c.original_name || c.original_title}
              </h1>
              {c.vote_average && (
                <div className="absolute right-[-5%] sm:right-[-8%] md:right-[-10%] top-[60%] sm:top-[55%] rounded-full text-xs sm:text-sm md:text-base font-semibold bg-yellow-600 text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center">
                  {(c.vote_average * 10).toFixed()}<sup>%</sup>
                </div>
              )}
            </Link>
        ))}
    </div>
  )
}

Cards.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards