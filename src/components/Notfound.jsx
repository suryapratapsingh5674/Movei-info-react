import { Link, useNavigate } from 'react-router-dom';
import notfound from '../../public/404.gif'

function Notfound() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full flex gap-6 items-start bg-black'>
      <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-5xl pt-6 pl-6 mr-3 cursor-pointer text-zinc-400 ri-close-fill"></Link>
    <img className='w-[60vw] h-[80vh] ml-[15vw]' src={notfound} alt="" />
    </div>
  )
}

export default Notfound