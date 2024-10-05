import { useEffect } from 'react';
import { asyncloadmovie, removemovie } from '../Store/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux';
import Loding from './Loading'; 
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import HorizontalCards from './partials/HorizontalCards';

function MovieDetail() {

   document.title = "Movie Info | Details"

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector(state => state.movie);
  console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    }
  }, [id])

  
  

  return info ? (
    <div style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='w-full relative min-h-[135vh] px-[10%] overflow-y-auto overflow-x-hidden'>
      <nav className='w-full text-zinc-100 h-[10vh] flex items-center gap-10 text-xl'>
      <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-white ri-arrow-left-line"></Link>
      <Link target='_blank' to={info.detail.homepage}><i className="ri-external-link-fill"></i></Link>
      <Link target='_blank' to={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}><img className='w-9' src="https://upload.wikimedia.org/wikipedia/commons/6/66/Wikidata-logo-en.svg" alt="" /></Link>
      <Link target='_blank' to={`https://www.imdb.com/title/${info.external_ids.imdb_id}`}><img className='w-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="" /></Link>
      </nav>
      <div className='w-full flex items-start gap-8'>
      <div>
      <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg h-[50vh] w-[20vw] object-cover" src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
      {info.watch && <div className='flex flex-col items-start gap-4 mt-2'>
        {info.watch.buy && <div className='flex flex-col gap-2'>
        <h3 className='text-zinc-200 '>Buy</h3>
        <div className='flex items-center gap-4'>
        {info.watch.buy && info.watch.buy.map((c, i) => <img key={i} className='w-[3vw] rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${c.logo_path}`} />)}
        </div>
        </div>}
        {info.watch.flatrate && <div className='flex flex-col gap-2'>
        <h3 className='text-zinc-200 '>Available</h3>
        <div className='flex items-center gap-4'>
        {info.watch.flatrate && info.watch.flatrate.map((c, i) => <img key={i} className='w-[3vw] rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${c.logo_path}`} />)}
        </div>
       </div>}
       {info.watch.rent && <div className='flex flex-col gap-2'>
        <h3 className='text-zinc-200 '>Rent</h3>
        <div className='flex items-center gap-4'>
        {info.watch.rent && info.watch.rent.map((c, i) => <img key={i} className='w-[3vw] rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${c.logo_path}`} />)}
        </div>
       </div>}
      </div>}
      </div>
      <div className='w-[50vw] text-white'>
      <h1 className='text-5xl text-white font-bold'>{info.detail.title || info.detail.orignal_title || info.detail.orignal_name} <small className='text-2xl font-bold text-zinc-200'>({info.detail.release_date.split("-")[0]})</small></h1>
      <div className='mt-3 mb-10 flex text-zinc-100 items-center gap-x-5'>
      <span className="p-4 rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center">{(info.detail.vote_average * 10).toFixed()}<sup>%</sup></span>
      <h1>User Score</h1>
      <h1>{info.detail.release_date}</h1>
      <h1>
        {info.detail.genres.map((c) => c.name).join(",")}
      </h1>
      <h1>{info.detail.runtime}min</h1>
      </div>
      <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
      <h1 className='text-2xl text-white mb-3 mt-5'>Overview</h1>
      <p>{info.detail.overview}</p>
      <h1 className='text-2xl text-white mb-3 mt-5'>Movie Translated</h1>
      <p className='mb-12'>{info.translations.join(", ")}</p>
      <Link className='bg-[#6556CD] hover:bg-[#5949c1] text-white font-semibold rounded p-4 px-6 mt-10' to={`${pathname}/Trailer`}><i className="ri-play-fill"></i> Play Trailer</Link>
      </div>
      </div>
      <div className='w-[80vw] h-[2px] mt-10 bg-zinc-400 mb-6 rounded-full'></div>
      <h1 className='text-3xl font-bold text-white mb-8'>Recommendation & Similar Stuff</h1>
      <HorizontalCards data={info.recommendations ? info.recommendations : info.similar} />
    </div>
  ) : <Loding />
}

export default MovieDetail