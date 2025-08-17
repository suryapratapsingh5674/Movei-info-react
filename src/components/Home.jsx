import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import HorizontalCrads from "./partials/HorizontalCards";
import Droupdown from "./partials/Droupdown";
import Loading from "./Loading";

function Home() {

    document.title = "Movie Info | Home"

    const [wallpaper, setwallpaper] = useState(null);
    const [Trending, setTrending] = useState(null);
    const [category, setcategory] = useState('all')

    async function getWallpaper(){
        try {
            const dataimage = await axios.get("trending/all/day");
            setwallpaper(dataimage.data.results[Math.floor(Math.random() * dataimage.data.results.length)]);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    async function getTrending(){
        try {
            const {data} = await axios.get(`trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    useEffect(()=>{
        getTrending();
        !wallpaper && getWallpaper();
    }, [category]) // eslint-disable-line react-hooks/exhaustive-deps

    

    return wallpaper && Trending ? (<>
    <Sidenav/>
    <div className="flex-1 min-h-screen ml-0 md:ml-72 lg:ml-80 overflow-y-auto overflow-x-hidden no-scrollbar">
        <Topnav />
        <Header data={wallpaper} />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-5 mt-[-1%] gap-3 sm:gap-0">
      <h1 className='text-2xl sm:text-3xl font-bold text-zinc-400 mb-2 sm:mb-5'>Trending</h1>
      <Droupdown title="filter" option={['tv', 'movie', 'all']} func={(e) => setcategory(e.target.value)}/>
      </div>
        <div className="pb-8 md:pb-12">
          <HorizontalCrads data={Trending}/>
        </div>
    </div>
    </>) : <Loading/>
}

export default Home;