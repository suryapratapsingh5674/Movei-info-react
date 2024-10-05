import { useEffect } from 'react';
import { asyncloadperson, removeperson } from '../Store/actions/PersonAction'
import { useDispatch, useSelector } from 'react-redux';
import Loding from './Loading'; 
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import HorizontalCards from './partials/HorizontalCards';

function PersonDetail() {

  document.title = "movie Info | Details"

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector(state => state.Person);
  console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    }
  }, [id])


  return info ? (
    <div className='px-[15%] w-screen h-[184vh] bg-[#1F1E24]'>
      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl'>
      <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-white ri-arrow-left-line"></Link>
      </nav>

      <div className='w-full flex gap-10 text-white'>
        <div className='w-[25%] text-white'>
        <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg h-[40vh] object-cover" src={`https://image.tmdb.org/t/p/original/${ info.detail.poster_path || info.detail.profile_path || info.detail.backdrop_path}`} alt="" />
        <div className='w-full h-[2px] mt-10 bg-zinc-400 mb-6 rounded-full'></div>
        <div className='text-xl text-white flex items-center gap-3'>
        { info.detail.homepage && <Link target='_blank' to={info.detail.homepage}><i className="ri-external-link-fill"></i></Link>}
      { info.external_ids.wikidata_id && <Link target='_blank' to={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}><img className='w-9' src="https://upload.wikimedia.org/wikipedia/commons/6/66/Wikidata-logo-en.svg" alt="" /></Link>}
      { info.external_ids.imdb_id && <Link target='_blank' to={`https://www.imdb.com/name/${info.external_ids.imdb_id}`}><img className='w-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="" /></Link>}
      { info.external_ids.facebook_id && <Link target='_blank' to={`https://www.facebook.com/${info.external_ids.facebook_id}`}><img className='w-9' src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="" /></Link>}
      { info.external_ids.instagram_id && <Link target='_blank' to={`https://www.instagram.com/${info.external_ids.instagram_id}`}><img className='w-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" /></Link>}
      { info.external_ids.twitter_id && <Link target='_blank' to={`https://x.com/${info.external_ids.twitter_id}`}><img className='w-9' src="https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png" alt="" /></Link>}
        </div>
        <h1 className='text-2xl mt-2 font-semibold'>Personal detail</h1>
        <h1 className='text-lg font-semibold mt-3'>
          Known For
        </h1>
        <h1 className='text-sm'>{info.detail.known_for_department}</h1>
        <h1 className='text-lg font-semibold mt-3'>
          Gender
        </h1>
        <h1 className='text-sm'>{info.detail.gender === 2 ? "Male" : "Female"}</h1>
        <h1 className='text-lg font-semibold mt-3'>
          Birth Date
        </h1>
        <h1 className='text-sm'>{info.detail.birthday}</h1>
        {info.detail.deathday && <h1 className='text-lg font-semibold mt-3'>
          Death Date
        </h1>}
        {info.detail.deathday && <h1 className='text-sm'>{info.detail.deathday}</h1>}
        <h1 className='text-lg font-semibold mt-3'>
          Place of birth
        </h1>
        <h1 className='text-sm'>{info.detail.place_of_birth}</h1>
        <h1 className='text-lg font-semibold mt-3'>
          Also known as
        </h1>
        <h1 className='text-sm'>{info.detail.also_known_as.join(", ")}</h1>
        </div>
        <div className='w-[75%] pl-20'>
        <h1 className='text-6xl mt-2 font-black'>{info.detail.name}</h1>
        <h1 className='text-xl font-semibold mt-6'>
          Biography
        </h1>
        <p className='mt-3'>{info.detail.biography}</p>
        
        <h1 className='text-xl mt-5 mb-8 font-semibold mt-3'>
          Movies
        </h1>
        <HorizontalCards data={info.movieCredits.cast} />
        <h1 className='text-xl mt-5 mb-8 font-semibold mt-3'>
          TV Shows
        </h1>
        <HorizontalCards data={info.tvCredits.cast} />
        </div>
      </div>
    </div>
  ) : <Loding />
}

export default PersonDetail