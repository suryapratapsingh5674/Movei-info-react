import { useNavigate } from "react-router-dom"
import Topnav from './partials/Topnav'
import Droupdown from './partials/Droupdown'
import { useEffect, useState } from "react";
import axios from '../utils/Axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import DataLoad from "./partials/DataLoad";
import Loading from "./Loading";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

 
function Trending() {

  document.title = "Movie Info | Trending"

  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [Trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  async function getTrending(){
    try {
        const {data} = await axios.get(`trending/${category}/${duration}?page=${page}`);
        // setTrending(data.results);
        if(data.results.length > 0){
          setTrending((prevstate) => [...prevstate, ...data.results]);
          setpage(page + 1);
        }else{
          sethasMore(false);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

const refreshHandler = () => {
  if(Trending.length === 0){
    getTrending();
  }else{
    setpage(1);
    setTrending([]);
    getTrending();
  }
}


useEffect(() => {
    refreshHandler();
}, [category, duration])

  return Trending.length > 0 ? (
    <div className="w-full h-screen scroller">
      <div className="w-full px-[5%] flex items-center mb-10">
      <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
        <Topnav />
        <Droupdown title='Category' option={['movie', 'tv', "all"]} func={(e) => setcategory(e.target.value)} />
        <div className="w-[2%]"></div>
        <Droupdown title='duration' option={['week', 'day']} func={(e) => setduration(e.target.value)} />
      </div>
      <InfiniteScroll dataLength={Trending.length} next={getTrending} hasMore={hasMore} loader={<DataLoad/>}>
      <Cards data={Trending} title={category} />
      </InfiniteScroll>

    </div>
  ) : <Loading />
}

export default Trending