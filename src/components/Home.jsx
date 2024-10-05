import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import HorizontalCrads from "./partials/HorizontalCards";
import Droupdown from "./partials/Droupdown";
import Loading from "./Loading";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function Home() {

    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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
    }, [category])

    

    return wallpaper && Trending ? (<>
    <Sidenav/>
    <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />

        <div className="flex justify-between p-5 mt-[-1%]">
      <h1 className='text-3xl font-bold text-zinc-400 mb-5'>Trending</h1>
      <Droupdown title="filter" option={['tv', 'movie', 'all']} func={(e) => setcategory(e.target.value)}/>
      </div>
        <HorizontalCrads data={Trending}/>
    </div>
    </>) : <Loading/>
}

export default Home;