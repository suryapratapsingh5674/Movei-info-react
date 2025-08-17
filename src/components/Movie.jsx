import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import axios from "../utils/Axios";
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav'
import Droupdown from './partials/Droupdown'
import DataLoad from "./partials/DataLoad";
import Loading from "./Loading";

function Movie() {

  document.title = "Movie Info | Movie"

    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
  async function getmovie(){
    try {
        const {data} = await axios.get(`movie/${category}?page=${page}`);
        // setTrending(data.results);
        if(data.results.length > 0){
          setmovie((prevstate) => [...prevstate, ...data.results]);
          setpage(page + 1);
        }else{
          sethasMore(false);
        }
    } catch (error) {
        console.log("Error:", error);
    }
  }
  
  const refreshHandler = () => {
  if(movie.length === 0){
    getmovie();
  }else{
    setpage(1);
    setmovie([]);
    getmovie();
  }
  }
  
  
  useEffect(() => {
    refreshHandler();
  }, [category])
  
    return  movie.length > 0 ? (
      <div className="w-full h-screen scroller">
        <div className="w-full px-[5%] flex items-center mb-10">
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i>
          <h1 className="text-2xl font-semibold text-zinc-400">movie</h1>
          <Topnav />
          <Droupdown title='Category' option={['popular', 'top_rated', 'upcoming']} func={(e) => setcategory(e.target.value)} />
        </div>
        <InfiniteScroll dataLength={movie.length} next={getmovie} hasMore={hasMore} loader={<DataLoad/>}>
        <Cards data={movie} title="movie" />
        </InfiniteScroll>
  
      </div>
    ) : <Loading />
}

export default Movie