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

function Popular() {

  document.title = "Movie Info | popular"

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

async function getpopular(){
  try {
      const {data} = await axios.get(`${category}/popular?page=${page}`);
      // setTrending(data.results);
      if(data.results.length > 0){
        setpopular((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      }else{
        sethasMore(false);
      }
  } catch (error) {
      console.log("Error:", error);
  }
}

const refreshHandler = () => {
if(popular.length === 0){
  getpopular();
}else{
  setpage(1);
  setpopular([]);
  getpopular();
}
}


useEffect(() => {
  refreshHandler();
}, [category])

  return  popular.length > 0 ? (
    <div className="w-full h-screen scroller">
      <div className="w-full px-[5%] flex items-center mb-10">
      <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold text-zinc-400">popular</h1>
        <Topnav />
        <Droupdown title='Category' option={['movie', 'tv']} func={(e) => setcategory(e.target.value)} />
      </div>
      <InfiniteScroll dataLength={popular.length} next={getpopular} hasMore={hasMore} loader={<DataLoad/>}>
      <Cards data={popular} title={category} />
      </InfiniteScroll>

    </div>
  ) : <Loading />
}

export default Popular