import Loader from '../../public/loading.gif'

function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
    <img src={Loader} alt="" />
    </div>
  )
}

export default Loading