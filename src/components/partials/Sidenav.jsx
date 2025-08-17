import { Link } from "react-router-dom"
import { useState } from "react"

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-2 left-3 z-[110] bg-[#6556CD] text-white p-[5px] rounded-lg"
      >
        <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-xl`}></i>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[105]" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidenav */}
      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
        fixed md:static 
        z-[108] 
        w-80 md:w-72 lg:w-80 
        flex-shrink-0 
        h-full md:h-screen 
        border-r-2 border-zinc-400 
        p-4 md:p-6 lg:p-10 
        bg-[#1F1E24] 
        transition-transform duration-300 ease-in-out
        overflow-y-auto
        no-scrollbar
      `}>
        <h1 className="text-lg md:text-xl lg:text-2xl text-white font-bold">
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className="text-sm md:text-lg lg:text-xl">Movie Info by surya</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-lg md:text-xl gap-1 md:gap-2">
          <h1 className="text-white font-semibold text-lg md:text-xl mt-6 md:mt-10 mb-3 md:mb-5">
            New Feeds
          </h1>
          <Link 
            to="/trending" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 lg:p-5 duration-300"
          >
            <i className="ri-fire-fill mr-2"></i> 
            <span className="text-base md:text-lg">Trending</span>
          </Link>
          <Link 
            to="/popular" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 lg:p-5 duration-300"
          >
            <i className="ri-line-chart-fill mr-2"></i> 
            <span className="text-base md:text-lg">Popular</span>
          </Link>
          <Link 
            to="/movie" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 lg:p-5 duration-300"
          >
            <i className="ri-movie-fill mr-2"></i> 
            <span className="text-base md:text-lg">Movie</span>
          </Link>
          <Link 
            to="/tvshow" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 lg:p-5 duration-300"
          >
            <i className="ri-tv-fill mr-2"></i> 
            <span className="text-base md:text-lg">TV Shows</span>
          </Link>
          <Link 
            to="/people" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 lg:p-5 duration-300"
          >
            <i className="ri-user-3-fill mr-2"></i> 
            <span className="text-base md:text-lg">People</span>
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400 my-4" />
        <nav className="flex flex-col text-zinc-400 text-lg md:text-xl gap-1 md:gap-2">
          <h1 className="text-white font-semibold text-lg md:text-xl mt-2 md:mt-4 mb-2">
            Website Information
          </h1>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 duration-300"
          >
            <i className="ri-eye-fill mr-2"></i> 
            <span className="text-base md:text-lg">About</span>
          </Link>
          <Link 
            to="/contect" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 md:p-4 duration-300"
          >
            <i className="ri-phone-fill mr-2"></i> 
            <span className="text-base md:text-lg">Contact Us</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Sidenav;