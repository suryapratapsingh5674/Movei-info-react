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

function Tvshow() {

  document.title = "Movie Info | TVshow"

    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tvshow, settvshow] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
  async function gettv(){
    try {
        const {data} = await axios.get(`tv/${category}?page=${page}`);
        // setTrending(data.results);
        if(data.results.length > 0){
          settvshow((prevstate) => [...prevstate, ...data.results]);
          setpage(page + 1);
        }else{
          sethasMore(false);
        }
    } catch (error) {
        console.log("Error:", error);
    }
  }
  
  const refreshHandler = () => {
  if(tvshow.length === 0){
    gettv();
  }else{
    setpage(1);
    settvshow([]);
    gettv();
  }
  }
  
  
  useEffect(() => {
    refreshHandler();
  }, [category])
  
    return  tvshow.length > 0 ? (
      <div className="w-full h-screen scroller">
        <div className="w-full px-[5%] flex items-center mb-10">
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i>
          <h1 className="text-2xl font-semibold text-zinc-400">TVshow</h1>
          <Topnav />
          <Droupdown title='Category' option={['airing_today', 'on_the_air', 'popular', 'top_rated']} func={(e) => setcategory(e.target.value)} />
        </div>
        <InfiniteScroll dataLength={tvshow.length} next={gettv} hasMore={hasMore} loader={<DataLoad/>}>
        <Cards data={tvshow} title="tv" />
        </InfiniteScroll>
  
      </div>
    ) : <Loading />
}

export default Tvshow