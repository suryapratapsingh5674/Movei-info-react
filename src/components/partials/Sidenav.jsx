import { Link } from "react-router-dom"

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-xl">Movie Info by surya</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-xl gap-2">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">
                New Feeds
            </h1>
            <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-fire-fill"></i> Tranding</Link>
            <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-line-chart-fill"></i> Popular</Link>
            <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-movie-fill"></i> Movie</Link>
            <Link to="/tvshow" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-tv-fill"></i> TV Shows</Link>
            <Link to="/people" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="ri-user-3-fill"></i> People</Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-xl gap-2">
            <h1 className="text-white font-semibold text-xl mt-4 mb-2">
                Website Information
            </h1>
            <Link to="/about" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300"><i className="ri-eye-fill"></i> About</Link>
            <Link to="/contect" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300"><i className="ri-phone-fill"></i> Contect US</Link>
        </nav>
    </div>
  )
}

export default Sidenav;