import ReactPlayer from "react-player"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import Notfound from "../Notfound";
import axios from "../../utils/Axios";
import { useEffect, useState } from "react";

function Trailer() {  
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes('movie') ? "movie" : "tv";
    const {id} = useParams();
    const [videoUrl, setVideoUrl] = useState(null); 
    const fetchData = async () => {
      try {
        const videos = await axios.get(`/${category}/${id}/videos`);
        const trailerKey = videos.data.results.find((m) => m.type === "Trailer").key;
        setVideoUrl(trailerKey); 
      } catch (error) {
        console.error("Error fetching trailer data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [id]); 
    

  return videoUrl ? (
    <div className="bg-[rgba(0,0,0,.8)] absolute top-0 left-0 z-[100] w-screen h-screen flex items-start justify-center">
        <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-3xl pt-2 pl-2 mr-3 cursor-pointer text-zinc-400 ri-close-fill"></Link>
        <ReactPlayer height={750} width={1500} url={`https://www.youtube.com/watch?v=${videoUrl}`}/>
    </div>
  ) : <Notfound />
}

export default Trailer