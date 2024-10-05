import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Cards({data, title}) {
  console.log(data);
  
  return (
    <div className="flex justify-between flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
        {data.map((c, i)=> (
            <Link to={`/${c.media_type || title}/details/${c.id}`} className=" relative w-[26vh] mr-[5%] mb-[5%]" key={i}><img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg h-[40vh] object-cover" src={`https://image.tmdb.org/t/p/original/${ c.poster_path || c.profile_path || c.backdrop_path}`} alt="" /> <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">{c.name || c.title || c.original_name || c.original_title}</h1>
            {c.vote_average && (<div className="absolute right-[-10%] p-4 top-[55%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center">{(c.vote_average * 10).toFixed()}<sup>%</sup></div>)}
            
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