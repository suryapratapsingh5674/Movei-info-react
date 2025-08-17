import { Link, useNavigate } from 'react-router-dom';
import notfound from '../../public/404.gif'

function Notfound() {
  const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center z-50'>
      {/* Cancel Button - Positioned at top-right */}
      <div className="w-full flex justify-end p-4 sm:p-6 absolute top-0 right-0 z-[60]">
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

      {/* Full Screen 404 Image */}
      <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <img 
          className='
            max-w-full max-h-full 
            w-auto h-auto 
            object-contain
            drop-shadow-2xl
          ' 
          src={notfound} 
          alt="404 Not Found" 
        />
      </div>

      {/* Optional: Back to Home Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link 
          to="/" 
          className="
            bg-[#6556CD] hover:bg-[#5949c1] 
            text-white font-semibold 
            px-6 py-3 
            rounded-lg 
            transition-all duration-200 
            shadow-lg
            flex items-center gap-2
          "
        >
          <i className="ri-home-line"></i>
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Notfound