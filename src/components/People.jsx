import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import axios from "../utils/Axios";
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav'
import DataLoad from "./partials/DataLoad";
import Loading from "./Loading";

function People() {

  document.title = "Movie Info | people"

    const navigate = useNavigate();
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
  async function getpeople(){
    try {
        const {data} = await axios.get(`person/popular?page=${page}`);
        // setTrending(data.results);
        if(data.results.length > 0){
          setpeople((prevstate) => [...prevstate, ...data.results]);
          setpage(page + 1);
        }else{
          sethasMore(false);
        }
    } catch (error) {
        console.log("Error:", error);
    }
  }
  
  const refreshHandler = () => {
  if(people.length === 0){
    getpeople();
  }else{
    setpage(1);
    setpeople([]);
    getpeople();
  }
  }
  
  
  useEffect(() => {
    refreshHandler();
  }, [])
  console.log(people);
  
  
    return  people.length > 0 ? (
      <div className="w-full h-screen scroller">
        <div className="w-full px-[5%] flex items-center mb-10">
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i>
          <h1 className="text-2xl font-semibold text-zinc-400">TVshow</h1>
          <Topnav />
        </div>
        <InfiniteScroll dataLength={people.length} next={getpeople} hasMore={hasMore} loader={<DataLoad/>}>
        <Cards data={people} title="people"/>
        </InfiniteScroll>
  
      </div>
    ) : <Loading />
}

export default People