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
    <div className="bg-[rgba(0,0,0,.9)] fixed top-0 left-0 z-[100] w-screen h-screen flex flex-col items-center justify-center">
        {/* Cancel Button - Positioned above video */}
        <div className="w-full flex justify-end p-4 sm:p-6 absolute top-0 right-0 z-[110]">
          <Link 
            onClick={() => navigate(-1)} 
            className="
              hover:text-[#6556CD] hover:bg-white hover:bg-opacity-20 
              text-white text-2xl sm:text-3xl md:text-4xl 
              p-2 sm:p-3 
              cursor-pointer 
              rounded-full 
              transition-all duration-200 
              bg-black bg-opacity-50
              ri-close-fill
            "
          ></Link>
        </div>

        {/* Video Player - Full Screen */}
        <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
          <ReactPlayer 
            height="100%" 
            width="100%" 
            url={`https://www.youtube.com/watch?v=${videoUrl}`}
            playing={true}
            controls={true}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0
                }
              }
            }}
            style={{
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </div>
    </div>
  ) : <Notfound />
}

export default Trailer